import { useEffect, useState } from 'react';
import axios from 'axios';

const useStudent = (user) => {
  const [student, setStudent] = useState();
  const [studentMessage, setStudentMessage] = useState();
  useEffect(async () => {
    axios.defaults.headers.authorization = `Bearer ${user.token}`;
    try {
      const { data } = await axios
        .get(`https://atlas-school-system.herokuapp.com/student?register=${user.register}`);

      setStudent(data);
    } catch (e) {
      const { response: { data } } = e;

      setStudentMessage(data.message);
    }
  }, []);

  return {
    student,
    studentMessage,
  };
};

export default useStudent;
