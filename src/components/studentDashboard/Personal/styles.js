import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  animation: dropDown 500ms normal;
  margin-bottom: 50px;
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
    color: rgba(0, 0, 0, 0.5);
    font-size: 13px;
    text-align: left;
    font-weight: 700;
  }
`;

export const Parents = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  border-bottom: 1px solid lightgray;
  margin-bottom: 15px;
  p {
    font-size: 13px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
  }
`;
