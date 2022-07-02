import styled from "styled-components";

export const MainWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 250px;
  height: 100vh;
`;

export const EditorPageLogo = styled.img`
  padding-bottom: 10px;
  height: 72px;
  border-bottom: 1px solid #424242;
`;

export const MainLabel = styled.h4`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ClientsListWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const EditorPageButton = styled.button`
  background-color: ${(props) => (props.primary ? "#3949AB" : "white")};
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  padding: 10px;
  border-radius: 40px;
  margin: 5px;
  font-weight: bold;
`;

export const RightSide = styled.div`
  background-color: #1c1e29;
  color: white;
  padding: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

export const RightSideDesc = styled.div`
  flex: 1;
`

export const EditorWrap = styled.div`
  overflow-y: hidden;
`;


