import React, { useState, useRef, useEffect } from "react";
import {
  MainWrap,
  RightSide,
  EditorWrap,
  EditorPageLogo,
  ClientsListWrapper,
  MainLabel,
  EditorPageButton,
  RightSideDesc,
} from "./EditorPage.styles.js";
import Client from "./../../Components/Client";
import Editor from "./../../Components/Editor";
import { initSocket } from "../../client.js";
import ACTIONS from "../../action.js";
import { useLocation, useNavigate, Navigate, useParams } from "react-router";
import toast from "react-hot-toast";

const EditorPage = () => {
  const location = useLocation();
  const reactNavigator = useNavigate();
  const { roomId } = useParams(); // roomId was given as a variable while defining dynamic path
  const socketRef = useRef(null);

  // Making a code reference so that value should be inserted form editor.jsx to this parent component editorPage.
  const codeRef = useRef(null);

  const [clients, setClients] = useState([]);

  useEffect(() => {
    function handleErrors(e) {
      console.log("socket error", e);
      toast.error("Socket connection failed, try again later.");
      reactNavigator("/");
    }

    const init = async () => {
      // After the below initSocket function our client will be connected to the socket server.
      socketRef.current = await initSocket();
      // As socket is prone to erros thus let's do error handling
      socketRef.current?.on("connect_error", (err) => handleErrors(err));
      socketRef.current?.on("connect_failed", (err) => handleErrors(err));

      // Sending event to server to show that I have joined.
      socketRef.current?.emit(ACTIONS.JOIN, {
        roomId,
        userName: location.state?.userName,
      });

      // Listening for joined event
      socketRef.current?.on(
        ACTIONS.JOINED,
        ({ clients, socketId, userName }) => {
          // If joined user is not you
          if (userName !== location.state?.userName) {
            toast.success(`${userName} joined the room`);
          }
          setClients(clients);

          // If a new user has joined then we have to get the existing code and put it there for the newly joined user
          socketRef.current?.emit(ACTIONS.SYNC_CODE, {
            code: codeRef?.current,
            socketId,
          });
        }
      );

      // Listening for disconnected event
      socketRef.current?.on(ACTIONS.DISCONNECTED, ({ socketId, userName }) => {
        toast.success(`${userName} left the room`);

        // Remove this user from the clientsList.
        setClients((prevClients) => {
          return prevClients.filter((client) => client.socketId !== socketId);
        });
      });
    };
    init();

    // As we are using many sideEffect like listeners, Thus calling cleaning functions as soon as component is unmounted.
    return () => {
      socketRef.current?.disconnect();

      // Unsubscribing socket-io listening events
      socketRef.current?.off(ACTIONS.JOINED);
      socketRef.current?.off(ACTIONS.DISCONNECTED);
    };
  }, [reactNavigator, location.state?.userName, roomId]);

  const handleCopyRoomId = async () => {
    // Adding try to catch because we will be using Web API, so to handle any errors
    try {
      await navigator.clipboard.writeText(roomId);
      toast.success("RoomID has been copied to your clipboard");
    } catch (err) {
      toast.error("Could not copy RoomID");
      console.log(err);
    }
  };

  const leaveRoom = () => {
    // Navigate to home page and the user will itself get disconnected.
    reactNavigator("/");
  };

  if (!location?.state) {
    return <Navigate to="/" />;
  }
  return (
    <MainWrap className="mainWrap">
      <EditorWrap>
        <Editor
          socketRef={socketRef}
          roomId={roomId}
          onCodeChange={(changedCode) => {
            codeRef.current = changedCode;
          }}
        />
      </EditorWrap>
      <RightSide>
        <RightSideDesc>
          <EditorPageLogo src="/co-develop.png" alt="co-develop-logo" />
          <MainLabel>Connected</MainLabel>
          <ClientsListWrapper className="clientsList">
            {clients.map((client, index) => (
              <Client userName={client.userName} key={index} />
            ))}
          </ClientsListWrapper>
        </RightSideDesc>
        <EditorPageButton className="btn copyBtn" onClick={handleCopyRoomId}>
          Copy Room Id
        </EditorPageButton>
        <EditorPageButton primary className="btn leaveBtn" onClick={leaveRoom}>
          Leave
        </EditorPageButton>
      </RightSide>
    </MainWrap>
  );
};

export default EditorPage;
