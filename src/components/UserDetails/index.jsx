import React, { useContext } from 'react';
import {
  Section, Img, Div, Adress, Contact, Peronal,
} from './styles';
import { studentContext } from '../../context/studentContext';

const UserDetails = () => {
  const { student } = useContext(studentContext);
  console.log(student);
  return (
    <Section>
      <Div>
        <Img src="./avatarNeto.jpg" alt="Foto do estudante" />
        <Adress>
          <h2>Endereço:</h2>
          <p>{`Rua: ${student.adress.street}, ${student.adress.number}`}</p>
          <p>{`Bairro: ${student.adress.district}`}</p>
          <p>{`Cidade: ${student.adress.city}, ${student.adress.cep}`}</p>
          <p>{`Estado: ${student.adress.state}`}</p>
        </Adress>
        <Contact>
          <h2>Contato:</h2>
          <p>{`Fone: ${student.basicInfo.phone}`}</p>
          <p>{`Email: ${student.basicInfo.email}`}</p>
        </Contact>
        <Peronal>
          <h2>dados pessoais</h2>
          <p>{`Nome: ${student.basicInfo.name}`}</p>
          <p>{`Idade: ${student.basicInfo.age}`}</p>
          <p>{`Data de nascimento: ${student.basicInfo.birthDate.split(':')}`}</p>
          <p>{`Nome: ${student.basicInfo.name}`}</p>
        </Peronal>
      </Div>
    </Section>
  );
};

export default UserDetails;
