import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  left: 0;
  bottom: ${(props) => (props.show ? '0' : '-100vh')};
  height: 100vh;
  width: 65vw;
  padding: 1vh 2vw;
  z-index: 100;
  transition: ease-in-out 500ms;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  align-items: center;
  .closeBtn {
    align-self: flex-end;
    cursor: pointer;
  }
`;

export const NotTitle = styled.h1`
  text-align: center;
  color: black;
  font-size: 18px;
  font-weight: 100;
  letter-spacing: 4px;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 40px 0 20px 0;
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
  border: 1px solid gray;
  cursor: pointer;
`;

export const Li = styled.p`
  align-self: flex-start;
  font-size: 15px;
  color: gray;
  font-weight: 700;
  margin-top: 40px;
`;

export const P = styled.p`
  font-size: 13px;
  align-self: flex-start;
  padding-top: 3px;
  color: rgba(0, 0, 0, 0.5);
`;
