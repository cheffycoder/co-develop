import React from "react";
import Avatar from "react-avatar";
import { ClientWrapper, UserName } from "./Client.styles";

const Client = ({ userName }) => {
  return (
    <ClientWrapper className="client">
      {/* Avatar */}
      <Avatar name={userName} size="50" round="14px"></Avatar>
      <UserName className="userName">{userName}</UserName>
    </ClientWrapper>
  );
};

export default Client;
