import { useState, useEffect } from 'react';

import axios from 'axios';

const useUsers = () => {
  const [user, setUser] = useState();
  const [userMessage, setUserMessage] = useState();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('user')) !== null) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, []);

  const login = async (register, password) => {
    try {
      const { data } = await axios
        .get(`https://atlas-school-system.herokuapp.com/login?register=${register}&password=${password}`);

      if (data.token) {
        localStorage.setItem('user', JSON.stringify({ ...data }));
        setUser(data);
      }
    } catch (err) {
      const { response: { data } } = err;

      setUserMessage(data.message);
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return {
    user,
    userMessage,
    login,
    logout,
  };
};

export default useUsers;
