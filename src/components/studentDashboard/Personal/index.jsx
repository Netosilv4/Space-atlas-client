import React, { useContext } from 'react';
import { IoMdMan, IoMdWoman } from 'react-icons/io';
import { studentContext } from '../../../context/studentContext';
import { Div, Parents } from './styles';

const Personal = () => {
  const { student } = useContext(studentContext);
  return (
    <Div>
      <h2>
        DADOS PESSOAIS
      </h2>
      <p>Nome:</p>
      <span>{student.basicInfo.name}</span>
      <p>Idade:</p>
      <span>{student.basicInfo.age}</span>
      <p>Data de nascimento:</p>
      <span>{student.basicInfo.birthDate.split('T')[0]}</span>
      <p>Pais:</p>
      <Parents>
        <IoMdMan color="black" size="25px" />
        <p>{student.basicInfo.parents.father}</p>
      </Parents>
      <Parents>
        <IoMdWoman color="black" size="30px" />
        <p>{student.basicInfo.parents.mother}</p>
      </Parents>
    </Div>
  );
};

export default Personal;