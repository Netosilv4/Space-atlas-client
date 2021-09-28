import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './userContext';
import useStudent from '../hooks/useStudent';

export const studentContext = createContext();

export const StudentProvider = ({ children }) => {
  const { user } = useContext(UserContext);

  const [displayNotifications, setDisplayNotifications] = useState(false);

  const { student } = useStudent(user);

  return (
    <studentContext.Provider value={{ student, displayNotifications, setDisplayNotifications }}>
      {children}
    </studentContext.Provider>
  );
};

StudentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
