import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  padding: 10px;
  border: 2px solid rgb(85, 149, 180);
  border-radius: 8px;
  animation: dropDown 500ms normal;
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

export default Div;
