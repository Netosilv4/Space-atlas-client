import React from 'react';

import { DashboardButton, DashboardContainer } from '../styles';
import { SectionTitle } from '../../globalComponents';
import Personal from './personal';
import Contact from './contact';
import { Photo } from './styles';
import Adress from './adress';

function BasicInfo() {
  return (
    <DashboardContainer>
      <Personal />
      <SectionTitle>Informações Básicas</SectionTitle>
      <Contact />
      <Photo src="/avatarNeto.jpg" alt="User photo" />
      <Adress />
      <DashboardButton style={{ position: 'fixed', right: '10%', bottom: '5%' }}>Solicitar Alterações</DashboardButton>
    </DashboardContainer>
  );
}

export default BasicInfo;
