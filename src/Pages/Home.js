import React, { useState } from "react";
import {
  HomePageWrapper,
  FormWrapper,
  InputGroup,
  MainLabel,
  FooterText,
  HomePageLogo,
  InputBox,
  JoinButton,
  CreateInfo,
} from "./../Home.styles.js";
import { v4 as uuidV4 } from "uuid";

const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  const createNewRoom = (event) => {
    // As it is being called by an anchor tag that's why page is being refreshed. Thus, using e.preventDefault to prevent this behaviour
    event.preventDefault();
    const id = uuidV4();

    setRoomId(id);
  };

  return (
    <HomePageWrapper className="homePageWrapper">
      <FormWrapper className="formWrapper">
        <HomePageLogo src="/co-develop.png" alt="co-develop-logo" />
        <MainLabel className="mainLabel">Paste invitation Room ID</MainLabel>
        <InputGroup className="inputGroup">
          <InputBox
            value={roomId}
            type="text"
            placeholder="ROOM ID"
            className="inputBox"
            onChange={(e) => setRoomId(e.target.value)}
          />
          <InputBox
            value={userName}
            type="text"
            placeholder="USERNAME"
            className="inputBox"
            onChange={(e) => setUserName(e.target.value)}
          />
          <JoinButton className="btn joinBtn">Join</JoinButton>
          <CreateInfo className="createInfo">
            If you don't have an invite then create &nbsp;
            <a className="createNewRoomBtn" href="" onClick={createNewRoom}>
              new room
            </a>
          </CreateInfo>
        </InputGroup>
      </FormWrapper>
      <FooterText>
        <h4>
          Built with love by, &nbsp;
          <a className="footerLink" href="#">
            Shivam bandral
          </a>
        </h4>
      </FooterText>
    </HomePageWrapper>
  );
};

export default Home;
