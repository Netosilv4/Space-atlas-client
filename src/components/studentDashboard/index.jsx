import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { DashboardWrapper } from './styles';
import Sidebar from '../sidebar';
import { studentContext } from '../../context/studentContext';
import BasicInfo from './basicInfo';
import Loading from '../loading';
import Notifications from './notifications';
import Requests from '../requests';

function StudentDashboard() {
  const { student } = useContext(studentContext);
  return student ? (
    <DashboardWrapper>
      <Sidebar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/request" component={Requests} />
          <Route path="/" component={BasicInfo} />
        </Switch>
      </BrowserRouter>
      <Notifications />
    </DashboardWrapper>
  ) : (
    <DashboardWrapper style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Loading />
    </DashboardWrapper>
  );
}

export default StudentDashboard;
