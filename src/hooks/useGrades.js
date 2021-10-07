import { useState } from 'react';
import axios from 'axios';

const useGrades = () => {
  const [grades, setGrades] = useState();
  const [subjects, setSubjects] = useState();

  const getGrades = async (register) => {
    const { data: { response } } = await axios.post('https://atlas-school-system.herokuapp.com/grades', {
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
