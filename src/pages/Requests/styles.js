import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  animation: dropDown 500ms normal;
  margin-bottom: 50px;
`;

export const H2 = styled.h2`
  word-break: break-word;
  text-align: center;
  color: black;
  font-size: 15px;
  font-weight: 100;
  letter-spacing: 4px;
  margin-bottom: 20px;
`;

export const P = styled.p`
    font-size: 14px;
    text-align: left;
    margin-top: 10px;
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
  margin-bottom: 30px;
`;

export const InputFile = styled.input``;
