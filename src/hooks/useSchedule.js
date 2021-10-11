import { useState } from 'react';
import axios from 'axios';

const useSchedule = (student) => {
  const [schedule, setSchedule] = useState();

  const getSchedule = async () => {
    const { data } = await axios
      .get(`https://atlas-school-system.herokuapp.com/schedule?className=${student.basicInfo.class}&register=${student.auth.register}`);

    const scheduleAux = Object.values(data.studentClass.schedule)
      .map((e) => e.map((day) => data.schoolSubjects
        .find((subject) => subject.subjectID === day)));
    setSchedule([...scheduleAux]);
  };

  return {
    schedule,
    getSchedule,
  };
};

export default useSchedule;
