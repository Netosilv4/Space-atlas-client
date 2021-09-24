import React, { useContext } from 'react';
import StudentDashboard from '../../components/studentDashboard';
import { UserContext } from '../../context/userContext';

function Dashboard() {
  const { user } = useContext(UserContext);

  if (user.type === 'student') {
    return (
      <StudentDashboard />
    );
  }

  return (
    <h1>Conectado</h1>
  );
}

export default Dashboard;
