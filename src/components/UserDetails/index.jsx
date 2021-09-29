import React, { useContext } from 'react';
import {
  Section, Img, Div, Adress,
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
      </Div>
    </Section>
  );
};

export default UserDetails;
