import { useEffect, useState } from 'react';
import axios from 'axios';

const useStudent = (user) => {
  const [student, setStudent] = useState();

  useEffect(async () => {
    axios.defaults.headers.authorization = `Bearer ${user.token}`;
    const { data } = await axios.post('https://atlas-school-system.herokuapp.com/student', {
      register: user.register,
    });
    setStudent({ ...data.student });
  }, []);

  return {
    student,
  };
};

export default useStudent;
