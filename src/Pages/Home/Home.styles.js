import styled from "styled-components";


export const HomePageLogo = styled.img`
    height: 120px;
    margin-bottom: 20px;
`

export const HomePageWrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`


export const FormWrapper = styled.div`
    background-color: #282a36;
    padding: 20px;
    border-radius: 10px;
    width: 35%;
`


export const MainLabel = styled.h4`
    margin-bottom: 20px;
    margin-top: 0; 
`

export const FooterText = styled.footer`
    position: fixed;
    bottom: 0;
    
    .footerLink {
        color: #4aee88;

        :hover {
            color: #368654;
            border-color: #368654;
        }
    }
`


export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
`


export const InputBox = styled.input`
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    margin-bottom: 14px;
    background-color: #eee;
    font-size: 16px;
    font-weight: bold;
`

export const JoinButton = styled.button`
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border: none;
    padding: 10px;
    border-radius: 5px;

    background: #4aed88;
    width: 100px;
    margin-left: auto;

    :hover{
        background-color: #2b824c;
    }
`

export const CreateRoomInfo = styled.span`
    margin: 0 auto; /* Centered the Create Info Text */
    margin-top: 20px;

    .createNewRoomBtn {
        color: #4aee88;
        text-decoration: none;
        border-bottom: 1px solid #4aee88;
        transition: all 0.2s ease-in-out;

        :hover {
            color: #368654;
            border-color: #368654;
        }
    }
`

