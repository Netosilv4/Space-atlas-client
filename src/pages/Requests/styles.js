import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  padding: 5%;
  animation: dropDown 500ms normal;
  margin-bottom: 30px;
`;

export const H2 = styled.h2`
  text-align: center;
  color: black;
  font-size: 15px;
  font-weight: 100;
  letter-spacing: 4px;
  padding-bottom: 40px;
  margin: 40px auto;
  border-bottom: 1px solid lightgray;
`;

export const P = styled.p`
    font-size: 14px;
    text-align: left;
    margin: 30px 0 10px;
`;

export const Button = styled.button`
  background: linear-gradient( 45deg,
    rgb(65, 51, 122),
    rgb(85, 149, 180)
  );
  color: white;
  padding: 10px 20px;
  border-radius: 100px;
  font-size:12px;
  cursor: pointer;
  border: 1px solid gray;
`;

export const InputFile = styled.input`
  width: 100%;
  background-color: whitesmoke;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  margin-bottom: 30px;
  ::-webkit-file-upload-button {
  background: white;
  border: 1px solid gray;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  color: black;
  padding: 5px 10px;
  }
`;
