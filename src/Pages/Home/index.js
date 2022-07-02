import React, { useState } from "react";
import {
  HomePageWrapper,
  FormWrapper,
  FormMainLabel,
  FormSubLabel,
  InputGroup,
  MainLabel,
  SubLabel,
  HeaderWrapper,
  Illustration,
  FooterText,
  HomePageLogo,
  InputBox,
  JoinButton,
} from "./Home.styles.js";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";

// Previously to route we used to use the useHistory hook, with new version we began using useNavigate.
import { useNavigate } from "react-router";

const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  const createNewRoom = (event) => {
    // As it is being called by an anchor tag that's why page is being refreshed. Thus, using e.preventDefault to prevent this behaviour
    event.preventDefault();
    const id = uuidV4();

    setRoomId(id);

    // Showing Toast
    toast.success("Created a new room");
  };

  const joinRoom = () => {
    if (!roomId || !userName) {
      toast.error("Room ID & Username is required");
      return;
    } else {
      //Redirect
      navigate(`/editor/${roomId}`, {
        // As we need to pass data from 1 route to another, in here we want to pass the userName entered, we will do so with state.
        // If we don't use then, then we either has to use redux store, or have a global state, or pass in URL, or store in LS(Local Storage).
        state: {
          userName,
        },
      });
    }
  };

  const handleInputEnter = (event) => {
    if (event.code === "Enter") joinRoom();
    return;
  };

  return (
    <HomePageWrapper className="homePageWrapper">
      <HeaderWrapper>
        <HomePageLogo src="/co-develop.png" alt="co-develop-logo" />
        <Illustration src="/co-develop-illustration.svg"></Illustration>
        <MainLabel className="mainLabel">Welcome aboard my friend</MainLabel>
        <SubLabel className="subLabel">
          Start collaborating just in a couple of clicks.
        </SubLabel>
        <FooterText>
          Built with love by, &nbsp;
          <a className="footerLink" href="#">
            Shivam bandral
          </a>
        </FooterText>
      </HeaderWrapper>
      <FormWrapper className="formWrapper">
        <FormMainLabel className="mainLabel">
          Collaborate For Free
        </FormMainLabel>
        <FormSubLabel className="subLabel">
          Paste invitation Room ID
        </FormSubLabel>
        <InputGroup className="inputGroup">
          <InputBox
            value={roomId}
            type="text"
            placeholder="ROOM ID"
            className="inputBox"
            onChange={(e) => setRoomId(e.target.value)}
            onKeyUp={handleInputEnter}
          />
          <InputBox
            value={userName}
            type="text"
            placeholder="USERNAME"
            className="inputBox"
            onChange={(e) => setUserName(e.target.value)}
            onKeyUp={handleInputEnter}
          />
          <JoinButton className="btn joinBtn" onClick={joinRoom}>
            Join
          </JoinButton>
        </InputGroup>
        <FormSubLabel className="createInfo">
          If you don't have an invite then create &nbsp;
          <a className="createNewRoomBtn" href="#" onClick={createNewRoom}>
            new room
          </a>
        </FormSubLabel>
      </FormWrapper>
    </HomePageWrapper>
  );
};

export default Home;
