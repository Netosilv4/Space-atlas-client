import React from 'react';
import {
  Section, Img, Div,
} from './styles';
import Adress from '../studentDashboard/adress';
import Contact from '../studentDashboard/Contact';
import Personal from '../studentDashboard/Personal';

const UserDetails = () => (
  <Section>
    <Div>
      <div style={{ width: '30%' }}>
        <Img src="./avatarNeto.jpg" alt="Foto do estudante" />
      </div>
      <div style={{ width: '60%' }}>
        <Personal />
      </div>
      <div style={{ width: '70%' }}>
        <Adress />
      </div>
      <div style={{ width: '100%' }}>
        <Contact />
      </div>
    </Div>
  </Section>
);

export default UserDetails;
