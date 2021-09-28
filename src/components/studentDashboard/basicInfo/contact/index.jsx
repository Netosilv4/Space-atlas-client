import React, { useContext } from 'react';

import { ContactInfo } from './styles';

import {
  BoxTitle, InfoTitle, InfoContainer,
} from '../styles';
import { studentContext } from '../../../../context/studentContext';

function Contact() {
  const { student } = useContext(studentContext);
  return (
    <ContactInfo>
      <BoxTitle>Contato</BoxTitle>
      <hr />
      <InfoContainer>
        <InfoTitle color="white" size="2vw">
          Telefone:
          {' '}
          { student.basicInfo.phone}
        </InfoTitle>
      </InfoContainer>
      <InfoContainer>
        <InfoTitle>
          Email :
          {' '}
          { student.basicInfo.email}
        </InfoTitle>
      </InfoContainer>
    </ContactInfo>
  );
}

export default Contact;
