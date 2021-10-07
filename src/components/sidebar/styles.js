import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  background: linear-gradient( 45deg,
    rgb(65, 51, 122),
    rgb(85, 149, 180)
  );
  overflow-x: hidden;
  justify-content: space-between;
  height: 100vh;
  position: fixed;
  width: 35vw;
  z-index: 1000;
  right: ${(props) => (props.showSideBar ? '0' : '-100vw')};
  display: flex;
  flex-direction: column;
  transition: ease-in-out 700ms;
  .closeBtn {
    align-self: flex-end;
    color: white;
    margin:1vh 2vw;
  }
  box-shadow: 0 5px 7px 3px black;
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

export const Div = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const SideBarTitle = styled.div`
  @media(max-width: 600px) {
  padding-left:  5px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  gap: 5px;
  color: black;
  span {
    display: flex;
    align-items: center;
    font-size: 13px;
    padding-left: 42px;
    height: 40px;
    white-space: nowrap;
    overflow-x: hidden;
    transition: ease-in-out 765ms 400ms;
  }
  img {
    z-index: 10;
    border-radius: 50%;
    object-fit: cover;
    position: fixed;
  }
  ${(props) => {
    if (props.showSideBar) {
      return {
        width: '100%',
        display: 'flex',
        img: {
          height: '40px',
          width: '40px',
        },
        span: {
          backgroundColor: 'whitesmoke',
          borderRadius: '50px',
          height: '40px',
          width: '90%',
        },
      };
    } return {
      width: '100%',
      display: 'flex',
      img: {
        height: '40px',
        width: '40px',
      },
      span: {
        width: '0',
      },
    };
  }}
  }
  display: none;
`;
