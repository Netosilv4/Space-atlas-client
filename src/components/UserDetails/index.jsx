import React, { useContext } from 'react';
import { IoMdMan, IoMdWoman } from 'react-icons/io';
import {
  Section, Img, Div, Adress, Contact, Peronal, Parents,
} from './styles';
import { studentContext } from '../../context/studentContext';

const UserDetails = () => {
  const { student } = useContext(studentContext);
  return (
    <Section>
      <Div>
        <Img src="./avatarNeto.jpg" alt="Foto do estudante" />
        <Adress>
          <h2>
            ENDEREÇO
          </h2>
          <p>{`Rua: ${student.adress.street}, ${student.adress.number}`}</p>
          <p>{`Bairro: ${student.adress.district}`}</p>
          <p>{`Cidade: ${student.adress.city}, ${student.adress.cep}`}</p>
          <p>{`Estado: ${student.adress.state}`}</p>
        </Adress>
        <Contact>
          <h2>
            CONTATO
          </h2>
          <p>{`Fone: ${student.basicInfo.phone}`}</p>
          <p>{`Email: ${student.basicInfo.email}`}</p>
        </Contact>
        <Peronal>
          <h2>
            DADOS PESSOAIS
          </h2>
          <p>{`Nome: ${student.basicInfo.name}`}</p>
          <p>{`Idade: ${student.basicInfo.age}`}</p>
          <p>{`Data de nascimento: ${student.basicInfo.birthDate.split('T')[0]}`}</p>
          <p>Pais:</p>
          <Parents>
            <IoMdMan />
            <p>{student.basicInfo.parents.father}</p>
          </Parents>
          <Parents>
            <IoMdWoman />
            <p>{student.basicInfo.parents.mother}</p>
          </Parents>
        </Peronal>
      </Div>
    </Section>
  );
};

export default UserDetails;
