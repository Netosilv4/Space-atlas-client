import React, { useContext, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { DashboardWrapper } from './styles';
import Sidebar from '../sidebar';
import { studentContext } from '../../context/studentContext';
import BasicInfo from './basicInfo';
import Loading from '../loading';
import Notifications from './notifications';
import Requests from '../requests';

function StudentDashboard() {
  const { student } = useContext(studentContext);
  const [showSideBar, setSideBar] = useState(false);

  return student ? (
    <DashboardWrapper>
      <Sidebar showSideBar={showSideBar} setSideBar={setSideBar} />
      <GiHamburgerMenu color="black" size="30px" onClick={() => setSideBar(!showSideBar)} />
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
