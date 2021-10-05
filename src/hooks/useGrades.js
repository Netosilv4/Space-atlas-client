import { useState } from 'react';
import axios from 'axios';

const useGrades = () => {
  const [grades, setGrades] = useState();
  const [subjects, setSubjects] = useState();

  const getGrades = async (register) => {
    const { data: { response } } = await axios.post('http://localhost:8080/grades', {
      register,
    });
    setGrades({ ...response.grades.grades });
    setSubjects([...response.schoolSubjects]);
  };

  return {
    grades,
    getGrades,
    subjects,
  };
};

export default useGrades;
