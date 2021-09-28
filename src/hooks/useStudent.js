import { useEffect, useState } from 'react';
import axios from 'axios';

const useStudent = (user) => {
  const [student, setStudent] = useState();

  useEffect(async () => {
    axios.defaults.headers.authorization = `Bearer ${user.token}`;
    const { data } = await axios.post('http://localhost:8080/student', {
      register: user.register,
    });
    setStudent({ ...data.student });
  }, []);

  return {
    student,
  };
};

export default useStudent;
