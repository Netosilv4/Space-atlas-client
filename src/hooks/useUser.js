import { useState } from 'react';

import axios from 'axios';

const useUsers = () => {
  const [user, setUser] = useState();
  const [userMessage, setUserMessage] = useState();

  const login = async (register, password) => {
    const { data } = await axios.post('http://localhost:8080/login', {
      register,
      password,
    });
    return data.response.token
      ? setUser({ ...data.response })
      : setUserMessage(data.response.message);
  };

  return {
    user,
    userMessage,
    login,
  };
};

export default useUsers;
