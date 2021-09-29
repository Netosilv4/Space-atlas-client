import styled from 'styled-components';

export const Section = styled.section`
  width:90vw;
  height: 91vh;
  margin: auto;
  background-color: whitesmoke;
  border-radius: 8px;
  overflow-y: scroll;

`;

export const H1 = styled.h1`
text-align: center;
`;

export const Img = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 100px;
  align-self: flex-start;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3vw;
  justify-content: space-between;
  gap: 20px;
`;
