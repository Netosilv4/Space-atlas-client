import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main, Div } from './styles';
import { studentContext } from '../../context/studentContext';
import Loading from '../loading';
import Notifications from './notifications';
import Header from '../Header';
import UserDetails from '../UserDetails';
import Requests from '../../pages/Requests';

function StudentDashboard() {
  const { student } = useContext(studentContext);

  return student ? (
    <Main>
      <Header />
      <Notifications />
      <Div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/requests" component={Requests} />
            <Route exact path="/" component={UserDetails} />
          </Switch>
        </BrowserRouter>
      </Div>
    </Main>
  ) : (
    <Main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Loading />
    </Main>
  );
}

export default StudentDashboard;
