import React from 'react';
import { SectionTitle } from '../globalComponents';
import { DashboardContainer } from '../studentDashboard/styles';
import { Form, FormTitle } from './styles';

function Requests() {
  return (
    <DashboardContainer>
      <SectionTitle>Formulário de Requisições</SectionTitle>
      <Form>
        <FormTitle>O que deseja alterar ?</FormTitle>
      </Form>
    </DashboardContainer>
  );
}

export default Requests;
