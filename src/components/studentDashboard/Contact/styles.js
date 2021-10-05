import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  animation: dropDown 1.5s normal;
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

export default Container;
