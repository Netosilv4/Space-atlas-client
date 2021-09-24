import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/userContext';
import { DashboardWrapper } from './styles';
import StudentBasics from '../studentBasics';
import Sidebar from '../sidebar';

function StudentDashboard() {
  const { user } = useContext(UserContext);

  const [student, setStudent] = useState();

  useEffect(async () => {
    axios.defaults.headers.authorization = `Bearer ${user.token}`;

    const { data } = await axios.post('http://localhost:8080/student', {
      register: user.register,
    });
    setStudent({ ...data.student });
  }, []);

  return student ? (
    <DashboardWrapper>
      <Sidebar name={student.basicInfo.name} />
      <StudentBasics />
    </DashboardWrapper>
  ) : <h1>Loading</h1>;
}

export default StudentDashboard;
