import styled from 'styled-components';

export const BoxTitle = styled.h1`
  display: flex;
  color: #D8E4FF;
  font-size: 1.4vw;
  align-self: flex-start;
  font-weight: 700;
`;

export const InfoTitle = styled.h3`
  color: #788AA3;
  font-weight: 500;
  padding-bottom: 2vh;
  font-size: 1vw;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background-color:white;
  height: 2vw;
  border-radius: 0.7vw;
  h1 {
    font-weight: 700;
    text-align: center;
    width: 100%;
    font-size: 1.3vw;
  }
`;

export const InfoContainer = styled.div`
  padding-top: 2vh;
`;

export const Photo = styled.img`
  border-radius: 50%;
  width: 12vw;
  height: 12vw;
  position: fixed;
  top: 15%;
  right: 7.5%;
  box-shadow: 0.1vw 0.1vw 1vw black;
`;
