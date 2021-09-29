import styled, { keyframes } from 'styled-components';

const dropDown = keyframes`
  from {
    margin-top: -100px;
    opacity: 0;
  }
  to {
    margin-top: 0;
    opacity: 1;
    }
`;

export const Section = styled.section`
  width:90vw;
  height: 91vh;
  margin: auto;
  background-color: whitesmoke;
  border-radius: 8px;
`;

export const H1 = styled.h1`
text-align: center;
`;

export const Img = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 100px;
  align-self: flex-end;
`;

export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3vw;
  gap: 20px;
`;

export const Adress = styled.div`
  width: 200px;
  padding: 10px;
  border: 3px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient( 45deg,
    rgb(65, 51, 122),
    rgb(85, 149, 180)
  );
  animation: ${dropDown} 700ms normal;
  h2 {
    font-size: 15px;
  }
  p {
    font-size: 12px;
  }
`;

export const Contact = styled.div`
  width: 200px;
  padding: 10px;
  border: 3px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient( 45deg,
    rgb(65, 51, 122),
    rgb(85, 149, 180)
  );
  animation: ${dropDown} 1500ms normal;
  h2 {
    font-size: 15px;
  }
  p {
    font-size: 12px;
  }
`;

export const Peronal = styled.div`
  width: 200px;
  padding: 10px;
  border: 3px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient( 45deg,
    rgb(65, 51, 122),
    rgb(85, 149, 180)
  );
  animation: ${dropDown} 1500ms normal;
  h2 {
    font-size: 15px;
  }
  p {
    font-size: 12px;
  }
`;
