import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  background: linear-gradient( 45deg,
    rgb(65, 51, 122),
    rgb(85, 149, 180)
  );
height: 100vh;
position: fixed;
width: 35vw;
z-index: 1000;
right: ${(props) => (props.showSideBar ? '0' : '-100vw')};
display: flex;
flex-direction: column;
justify-content: space-between;
transition: ease-in-out 700ms;
.closeBtn {
  align-self: flex-end;
  color: white;
  margin:1vh 2vw;
}
@media(min-width: 768px) {
  width: 5%;
  color: white;
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

export const H4 = styled.h4`
  font-size: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  font-weight: 300;
  color: ${(props) => (props.select ? 'rgb(245, 233, 96)' : 'white')};
  border-left: ${(props) => (props.select ? '5px solid rgb(245, 233, 96)' : null)};
  padding-left: ${(props) => (props.select ? '5px' : '10px')};
`;

export const Div = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
