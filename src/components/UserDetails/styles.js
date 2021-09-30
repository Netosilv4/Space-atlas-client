import styled from 'styled-components';

export const H1 = styled.h1`
text-align: center;
`;

export const Img = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 100px;
  align-self: center;
  margin-top: 3vw;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3vw;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
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
