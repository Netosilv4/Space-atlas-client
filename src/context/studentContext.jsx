import React, {
  createContext, useContext, useState,
} from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './userContext';
import useStudent from '../hooks/useStudent';
import useSelectedPage from '../hooks/useSelectedPage';

export const studentContext = createContext();

export const StudentProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [displayNotifications, setDisplayNotifications] = useState(false);
  const { setSelected, selected } = useSelectedPage();

  const { student, studentMessage } = useStudent(user);

  return (
    <studentContext.Provider value={{
      student, displayNotifications, setDisplayNotifications, setSelected, selected, studentMessage,
    }}
    >
      {children}
    </studentContext.Provider>
  );
};

StudentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
