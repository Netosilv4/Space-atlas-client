import React, { useContext } from 'react';
import Div from './styles';
import { studentContext } from '../../../context/studentContext';

const Adress = () => {
  const { student } = useContext(studentContext);
  return (
    <Div>
      <h2>
        ENDEREÇO
      </h2>
      <p>Rua:</p>
      <span>{`${student.adress.street}, ${student.adress.number}`}</span>
      <p>Bairro:</p>
      <span>{student.adress.district}</span>
      <p>Cidade:</p>
      <span>{`${student.adress.city}, ${student.adress.cep}`}</span>
      <p>Estado:</p>
      <span>{student.adress.state}</span>
    </Div>
  );
};

export default Adress;
