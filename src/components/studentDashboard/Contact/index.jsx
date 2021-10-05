import React, { useContext } from 'react';
import { studentContext } from '../../../context/studentContext';
import Container from './styles';

const Contact = () => {
  const { student } = useContext(studentContext);
  return (
    <Container>
      <h2>
        CONTATO
      </h2>
      <p>Fone:</p>
      <span>{student.basicInfo.phone}</span>
      <p>Email:</p>
      <span>{student.basicInfo.email}</span>
    </Container>
  );
};

export default Contact;
