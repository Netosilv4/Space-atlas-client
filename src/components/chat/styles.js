import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Messages = styled.div`
  padding: 5px;
`;

export const SendButton = styled.button`
  padding: 5px 10px;
  background-color: black;
  border-radius: 10px;
  color: white;
`;

export const MessageArea = styled.input`
  border: 1px solid black;
`;

export const ButtonWrapper = styled.div`
  border-top: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;
