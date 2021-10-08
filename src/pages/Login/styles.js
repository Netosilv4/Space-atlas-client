import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    background: 'linear-gradient( 45deg, rgb(65, 51, 122), rgb(85, 149, 180));',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  },
  submit: {
    background: 'linear-gradient( 90deg, rgb(65, 51, 122), rgb(85, 149, 180));',
  },
}));

export default useStyles;

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Section = styled.section`
  background-color: rgba(255, 255, 255, 0.9);
  width: 90vw;
  height: 120vw;
  max-width: 400px;
  max-height: 500px;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
`;

export const Div = styled.div`
  display: flex;
  width: 90%;
  margin: 0 30px;
  flex-direction: ${(props) => (props.display ? 'column' : 'row')};
  align-items: center;
  justify-content: ${(props) => (props.display ? null : 'space-between')};
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 3px;
  color: whitesmoke;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 2px;
  margin-right: 30px;
`;

export const Span = styled.span`
  font-size: 12px;
  color: black;
`;

export const P = styled.p`
  font-size: 14px;
  `;
