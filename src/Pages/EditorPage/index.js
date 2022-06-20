import React, { useState } from "react";
import {
  MainWrap,
  LeftSide,
  EditorWrap,
  EditorPageLogo,
  ClientsListWrapper,
  MainLabel,
  EditorPageButton,
  LeftSideDesc,
} from "./EditorPage.styles.js";
import Client from "./../../Components/Client";
import Editor from "./../../Components/Editor";

const EditorPage = () => {
  const [clients, setClients] = useState([
    { socketId: 1, userName: "Shivam Bandral" },
    { socketId: 2, userName: "Bhumika" },
  ]);
  return (
    <MainWrap className="mainWrap">
      <LeftSide>
        <LeftSideDesc>
          <EditorPageLogo src="/co-develop.png" alt="co-develop-logo" />
          <MainLabel>Connected</MainLabel>
          <ClientsListWrapper className="clientsList">
            {clients.map((client) => (
              <Client userName={client.userName} />
            ))}
          </ClientsListWrapper>
        </LeftSideDesc>
        <EditorPageButton className="btn copyBtn">
          Copy Room Id
        </EditorPageButton>
        <EditorPageButton primary className="btn leaveBtn">
          Leave
        </EditorPageButton>
      </LeftSide>
      <EditorWrap>
        <Editor />
      </EditorWrap>
    </MainWrap>
  );
};

export default EditorPage;
