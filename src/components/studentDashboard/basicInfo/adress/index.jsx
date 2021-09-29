import React, { useContext } from 'react';

import { AdressInfo, AdressWrapper } from './styles';
import {
  BoxTitle, InfoTitle, InfoContainer, InfoBox,
} from '../styles';
import { studentContext } from '../../../../context/studentContext';

function Adress() {
  const { student } = useContext(studentContext);
  return (
    <AdressInfo>
      <BoxTitle>Endereço</BoxTitle>
      <AdressWrapper>
        <InfoContainer>
          <InfoTitle>Cidade</InfoTitle>
          <InfoBox>
            <h1>{ student.adress.city }</h1>
          </InfoBox>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>Bairro</InfoTitle>
          <InfoBox>
            <h1>{ student.adress.district }</h1>
          </InfoBox>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>Rua/Logradouro</InfoTitle>
          <InfoBox>
            <h1>{ student.adress.street }</h1>
          </InfoBox>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>CEP</InfoTitle>
          <InfoBox>
            <h1>{ student.adress.cep }</h1>
          </InfoBox>
        </InfoContainer>
      </AdressWrapper>
    </AdressInfo>
  );
}

export default Adress;
