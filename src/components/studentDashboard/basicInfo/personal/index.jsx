import React, { useContext } from 'react';

import { PersonalInfo } from './styles';
import {
  BoxTitle, InfoTitle, InfoBox, InfoContainer,
} from '../styles';
import { studentContext } from '../../../../context/studentContext';

function Personal() {
  const { student } = useContext(studentContext);

  return (
    <PersonalInfo>
      <BoxTitle>Dados Pessoais</BoxTitle>
      <hr width="100%" style={{ alignSelf: 'center', height: '0.1vw' }} />
      <InfoContainer>
        <InfoTitle>Matricula</InfoTitle>
        <InfoBox>
          <h1>{student.auth.register}</h1>
        </InfoBox>
      </InfoContainer>
      <InfoContainer>
        <InfoTitle>Nome</InfoTitle>
        <InfoBox>
          <h1>{student.basicInfo.name}</h1>
        </InfoBox>
      </InfoContainer>
      <InfoContainer>
        <InfoTitle>Data de Nascimento</InfoTitle>
        <InfoBox>
          <h1>{student.basicInfo.birthDate.split('T')[0]}</h1>
        </InfoBox>
      </InfoContainer>
      <InfoContainer>
        <InfoTitle>Idade</InfoTitle>
        <InfoBox>
          <h1>
            {student.basicInfo.age}
            {' '}
            anos
          </h1>
        </InfoBox>
      </InfoContainer>
      <InfoContainer>
        <InfoTitle>Filiação</InfoTitle>
        <InfoBox style={{ height: '14vh' }}>
          <h1>{student.basicInfo.parents.mother}</h1>
          <h1>{student.basicInfo.parents.father}</h1>
        </InfoBox>
      </InfoContainer>
    </PersonalInfo>
  );
}

export default Personal;
