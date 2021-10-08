import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/School';
import Typography from '@material-ui/core/Typography';
import { UserContext } from '../../context/userContext';
import useStyles, {
  Main, Section, Div, Button, P,
} from './styles';
import useLoginImage from '../../hooks/useLoginImage';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" style={{ fontSize: '12px' }}>
      {'Copyright © '}
      <Link to="/" color="inherit" href="https://material-ui.com/" style={{ fontSize: '14px' }}>
        Space Atlas
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

export default function Login() {
  const [register, setRegister] = useState('');
  const [password, setPassword] = useState('');
  const { login, userMessage } = useContext(UserContext);
  const classes = useStyles();
  const { image } = useLoginImage();

  return (
    <Main background={image}>
      <Section>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <form className={classes.form} noValidate>
          <Div display>
            <TextField
              variant="outlined"
              margin="normal"
              required
              style={{ width: '100%' }}
              id="matricula"
              label="Matrícula"
              name="matricula"
              autoComplete="matricula"
              autoFocus
              value={register}
              onChange={({ target }) => setRegister(target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              style={{ width: '100%' }}
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </Div>
          <Div style={{ width: '90%' }}>
            <Button
              type="button"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => login(register, password)}
            >
              Entrar
            </Button>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" style={{ paddingRight: '0' }} />}
              label={<P>lembra de mim</P>}
            />
          </Div>
          { userMessage ? <p style={{ color: 'red' }}>{userMessage}</p> : null }
          <Link to="/">
            Esqueceu sua senha?
          </Link>
        </form>
        <Div display>
          <Copyright />
        </Div>
      </Section>
    </Main>
  );
}
