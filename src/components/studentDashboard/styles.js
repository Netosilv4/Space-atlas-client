import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export const Div = styled.section`
  width:90vw;
  height: 91vh;
  margin: auto;
  background-color: ${(props) => (props.history === '/chat' ? 'blue' : 'whitesmoke')};
  border-radius: 8px;
  overflow-y: scroll;
`;

export const DashboardContainer = styled.section`
`;

export const DashboardButton = styled.button`
`;
