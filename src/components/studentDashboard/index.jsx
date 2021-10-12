import React, { useContext } from 'react';
import {
  Switch, Route, BrowserRouter, useHistory,
} from 'react-router-dom';
import { Main, Div } from './styles';
import { studentContext } from '../../context/studentContext';
import Loading from '../loading';
import Notifications from './notifications';
import Header from '../Header';
import UserDetails from '../UserDetails';
import Requests from '../../pages/Requests';
import StudentSchedule from '../studentSchedule';
import StudentGrades from '../studentGrades';
import Chat from '../chat';

function StudentDashboard() {
  const { student, studentMessage } = useContext(studentContext);
  const history = useHistory();

  if (studentMessage) {
    return <div>{ studentMessage}</div>;
  }

  return student ? (
    <BrowserRouter>
      <Main>
        <Header history={history} />
        <Notifications />
        <Div id="div-scroll">
          <Switch>
            <Route exact path="/requests" component={Requests} />
            <Route exact path="/schedule" component={StudentSchedule} />
            <Route exact path="/grades" component={StudentGrades} />
            <Route exact path="/chat" component={Chat} />
            <Route path="/" component={UserDetails} />
          </Switch>
        </Div>
      </Main>
    </BrowserRouter>
  ) : (
    <Main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Loading />
    </Main>
  );
}

export default StudentDashboard;
