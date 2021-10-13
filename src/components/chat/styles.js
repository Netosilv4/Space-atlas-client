import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Messages = styled.div`
  padding: 5px 5px 70px 5px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SendButton = styled.button`
  width: 25%;
  max-width: 200px;
  padding: 10px 20px;
  border-radius: 100px;
  color: whitesmoke;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  background: linear-gradient( 90deg, rgb(65, 51, 122), rgb(85, 149, 180));
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MessageArea = styled.input`
  border: 1px solid darkgray;
  border-radius: 4px;
  padding: 5px 0;
  width: 70%;
`;

export const ButtonWrapper = styled.div`
  border-top: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 90%;
  margin-bottom: 3vh;
  background-color: white;
  border-radius: 0 0 8px 8px;
`;

export const MessageBox = styled.div`
  background-color: ${(props) => (props.side ? '#3C7A89' : '#16262E')};
  padding: 8px;
  min-width: 30%;
  max-width: 90%;
  border-radius: ${(props) => (props.side ? '10px 0 10px 10px' : '0 10px 10px 10px')};
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  align-self: ${(props) => (props.side ? 'flex-end' : 'flex-start')};
  box-shadow: 0 2px 5px gray;
  color: white;
`;

export const MessageUsername = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: orange;
  padding-bottom: 5px;
`;

export const MessageHour = styled.p`
  font-size: 9px;
  color: lightgray;
  text-align: right;
`;
