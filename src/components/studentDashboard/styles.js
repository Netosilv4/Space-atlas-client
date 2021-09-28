import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const DashboardWrapper = styled.main`
  display: flex;
  width: 100%;
  background-color: #243B57;
  align-items: center;
  height: 100vh;
  overflow-x: hidden;
`;

export const DashboardContainer = styled.section`
  display: flex;
  width: 94%;
  background-color: white;
  height: 95vh;
  border-radius: 2vw;
  animation: ${fadeIn} 0.5s ease-out;
  box-shadow: 0.2vw 0.2vw 2vw black;
`;

export const DashboardButton = styled.button`
  width: 15vw;
  background-color: #243B57;
  border-radius: 2vw;
  border: none;
  color: white;
  font-weight: 700;
  padding: 0.5vw;
  height: 5vh;
  cursor: pointer;
  box-shadow: 0 0 1vw black;
  :hover {
    background-color:white;
    color:  #243B57;
  }

`;
