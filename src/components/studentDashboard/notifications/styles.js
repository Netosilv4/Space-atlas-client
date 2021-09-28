import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  right: ${(props) => (props.show ? '0%' : '-30%')};
  height: 100vh;
  background-color: #243B57;
  width: 20%;
  z-index: 100;
  transition: 0.5s;
  box-shadow: 0 0 1vw 0.7vw black ;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NotTitle = styled.h1`
  color: white;
  text-align: center;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  padding-top: 4vh;
  width: 100%;
`;
