import { useState } from 'react';
import axios from 'axios';

const useSchedule = (student) => {
  const [schedule, setSchedule] = useState();

  const getSchedule = async () => {
    const { data: { response } } = await axios.post('https://atlas-school-system.herokuapp.com/schedule', {
      register: student.auth.register,
      className: student.basicInfo.class,
    });
    const scheduleAux = Object.values(response.classSchedule.schedule)
      .map((e) => e.map((day) => response.schoolSubjects
        .find((subject) => subject.subjectID === day)));
    setSchedule([...scheduleAux]);
  };

  return {
    schedule,
    getSchedule,
  };
};

export default useSchedule;
