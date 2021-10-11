import { useState } from 'react';
import axios from 'axios';

const useGrades = () => {
  const [grades, setGrades] = useState();
  const [subjects, setSubjects] = useState();

  const getGrades = async (register) => {
    const { data } = await axios
      .get(`https://atlas-school-system.herokuapp.com/grades?register=${register}`);
    setGrades({ ...data.grades.grades });
    setSubjects([...data.subjects]);
  };

  return {
    grades,
    getGrades,
    subjects,
  };
};

export default useGrades;
