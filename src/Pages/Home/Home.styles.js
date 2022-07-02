import styled from "styled-components";

export const HomePageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const HeaderWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #1c1e29;
`;

export const HomePageLogo = styled.img`
  height: 80px;
  margin-right: auto;
  margin-left: 50px;
  margin-top: 20px;
`;

export const Illustration = styled.img`
  margin-top: auto;
  height: 35%;
  border: 1px dashed #d0d0d0;
  padding: 8% 12%;
  /* background: white; */
`;

export const MainLabel = styled.span`
  font-size: 24px;
  font-weight: 500;
  line-height: 48px;
  color: white;
`;

export const SubLabel = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  color: white;
  margin-bottom: auto;
`;

export const FooterText = styled.footer`
  font-size: 12px;
  margin: 10px auto;
  color: white;

  .footerLink {
    color: #3949AB;

    /* :hover {
      color: #043cc0;
      border-color: #043cc0;
    } */
  }
`;

export const FormWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormMainLabel = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #343434;
`;

export const FormSubLabel = styled.span`
  font-size: 14px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #343434;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

export const InputBox = styled.input`
  padding: 0 25px;
  border-radius: 8px;
  outline: none;
  border: 0.5px solid #d0d0d0;
  margin-bottom: 20px;
  background: transparent;
  font-size: 12px;
  color: #343434;
  height: 40px;

  ::placeholder {
    color: #343434;
  }
`;

export const JoinButton = styled.button`
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  padding: 10px;
  border-radius: 40px;
  color: white;

  background: #1c1e29;
  width: 100%;
  margin-left: auto;

  :hover {
    color: #1c1e29;
    border: 1px solid #1c1e29;
    background: transparent;
  }
`;

// export const CreateRoomInfo = styled.span`
//   margin: 0 auto; /* Centered the Create Info Text */
//   margin-top: 20px;

//   .createNewRoomBtn {
//     color: #043cc0;
//     text-decoration: none;
//     border-bottom: 1px solid #043cc0;
//     transition: all 0.2s ease-in-out;

//     :hover {
//       color: #368654;
//       border-color: #368654;
//     }
//   }
// `;
