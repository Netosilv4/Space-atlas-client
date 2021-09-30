import React from 'react';
import { Link } from 'react-router-dom';
import {
  Img, Div, Button,
} from './styles';
import Adress from '../studentDashboard/adress';
import Contact from '../studentDashboard/Contact';
import Personal from '../studentDashboard/Personal';

const UserDetails = () => (
  <Div>
    <Img src="./avatarNeto.jpg" alt="Foto do estudante" />
    <Link to="/requests">
      <Button>Solicitar Alteração</Button>
    </Link>
    <div style={{ width: '100%' }}>
      <Personal />
    </div>
    <div style={{ width: '100%' }}>
      <Adress />
    </div>
    <div style={{ width: '100%' }}>
      <Contact />
    </div>
  </Div>
);

export default UserDetails;
