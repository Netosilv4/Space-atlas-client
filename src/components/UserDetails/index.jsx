import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Img, Div, Button,
} from './styles';
import Adress from '../studentDashboard/adress';
import Contact from '../studentDashboard/Contact';
import Personal from '../studentDashboard/Personal';
import { studentContext } from '../../context/studentContext';

const UserDetails = ({ history }) => {
  const { setSelected } = useContext(studentContext);

  useEffect(() => {
    setSelected(history.location.pathname);
  }, []);

  return (
    <Div>
      <Img src="./avatarNeto.jpg" alt="Foto do estudante" />
      <Button onClick={() => history.push('/requests')}>Solicitar Alteração</Button>
      <div style={{ width: '100%' }}>
        <Personal />
      </div>
      <div style={{ width: '100%' }}>
        <Adress />
      </div>
      <div style={{ width: '100%' }}>
        <Contact />
      </div>
    </Div>
  );
};

UserDetails.propTypes = {
  history: PropTypes.objectOf(String).isRequired,
};

export default withRouter(UserDetails);
