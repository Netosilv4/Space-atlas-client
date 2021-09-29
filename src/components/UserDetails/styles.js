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
  justify-content: space-between;
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
  transform: translateY(-150px);
  margin-bottom: -150px;
  h2 {
      text-align: center;
  color: black;
  font-size: 15px;
  font-weight: 100;
  letter-spacing: 4px;
  }
  p {
    font-size: 12px;
  }
`;

export const Contact = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
  margin: 0 auto;
  border: 3px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient( 45deg,
    rgb(65, 51, 122),
    rgb(85, 149, 180)
  );
  animation: ${dropDown} 1500ms normal;
  h2 {
      text-align: center;
  color: black;
  font-size: 15px;
  font-weight: 100;
  letter-spacing: 4px;
  margin-bottom: 10px;
  }
  p {
    font-size: 12px;
  }
`;

export const Peronal = styled.div`
  width: 90%;
  padding: 10px;
  border: 3px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient( 45deg,
    rgb(65, 51, 122),
    rgb(85, 149, 180)
  );
  animation: ${dropDown} 1500ms normal;
  h2 {
      text-align: center;
  color: black;
  font-size: 15px;
  font-weight: 100;
  letter-spacing: 4px;
  }
  p {
    font-size: 12px;
  }
`;

export const Parents = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
