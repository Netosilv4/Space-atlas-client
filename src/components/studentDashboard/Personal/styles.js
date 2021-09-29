import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  padding: 10px;
  border: 2px solid rgb(85, 149, 180);
  border-radius: 8px;
  animation: dropDown 200ms linear;
  h2 {
  word-break: break-word;
  text-align: center;
  color: black;
  font-size: 15px;
  font-weight: 100;
  letter-spacing: 4px;
  margin-bottom: 20px;
  }
  p {
    font-size: 14px;
    text-align: left;
    margin-top: 10px;
  }
  span {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.6);
    text-align: left;
  }
`;

export const Parents = styled.div`
  color: rgba(0, 0, 0, 0.6);
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  border-bottom: 1px solid lightgray;
  margin-bottom: 15px;
  p {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.6);
  }
`;
