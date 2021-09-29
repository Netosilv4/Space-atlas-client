import React, { useContext } from 'react';
import { studentContext } from '../../../context/studentContext';
import Div from './styles';

const Contact = () => {
  const { student } = useContext(studentContext);
  return (
    <Div>
      <h2>
        CONTATO
      </h2>
      <p>Fone:</p>
      <span>{student.basicInfo.phone}</span>
      <p>Email:</p>
      <span>{student.basicInfo.email}</span>
    </Div>
  );
};

export default Contact;
