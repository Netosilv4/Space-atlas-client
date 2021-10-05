import React, { useContext } from 'react';
import { IoMdMan, IoMdWoman } from 'react-icons/io';
import { studentContext } from '../../../context/studentContext';
import { Container, Parents } from './styles';

const Personal = () => {
  const { student } = useContext(studentContext);
  return (
    <Container>
      <h2>
        DADOS PESSOAIS
      </h2>
      <p>Nome:</p>
      <span>{student.basicInfo.name}</span>
      <p>Idade:</p>
      <span>{student.basicInfo.age}</span>
      <p>Data de nascimento:</p>
      <span>{student.basicInfo.birthDate.split('T')[0]}</span>
      <p>Turma: </p>
      <span>{student.basicInfo.class}</span>
      <p>Sexo: </p>
      <span>{student.basicInfo.genre}</span>
      <p>Pais:</p>
      <Parents>
        <IoMdMan color="black" size="30px" />
        <p>{student.basicInfo.parents.father}</p>
      </Parents>
      <Parents>
        <IoMdWoman color="black" size="30px" />
        <p>{student.basicInfo.parents.mother}</p>
      </Parents>
    </Container>
  );
};

export default Personal;
