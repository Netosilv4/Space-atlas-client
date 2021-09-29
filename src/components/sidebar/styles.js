import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
background-color: whitesmoke;
height: 100vh;
padding:1vh 2vw;
position: fixed;
width: 35vw;
z-index: 1000;
left: ${(props) => (props.showSideBar ? '0' : '-100vw')};
display: flex;
flex-direction: column;
justify-content: space-between;
transition: ease-in-out 700ms;
.closeBtn {
  align-self: flex-end;
}
@media(min-width: 768px) {
  width: 5%;
  color: black;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3%;
  svg {
    cursor: pointer;
  }
}
`;

export const h1 = styled.h1``;

export const Div = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
