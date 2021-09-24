import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useUsers from '../hooks/useUser';

export const UserContext = createContext();

export const ContextProvider = ({ children }) => {
  const { user, login, userMessage } = useUsers();
  return (
    <UserContext.Provider value={{
      user, login, userMessage,
    }}
    >
      {children}
    </UserContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
