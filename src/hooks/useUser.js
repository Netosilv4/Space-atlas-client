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
    const { data } = await axios.post('http://localhost:8080/login', {
      register,
      password,
    });
    if (data.response.token) {
      localStorage.setItem('user', JSON.stringify({ ...data.response }));
      setUser({ ...data.response });
    } else {
      setUserMessage(data.response.message);
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
