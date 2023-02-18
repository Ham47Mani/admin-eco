import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import Topnav from '../components/topnav/Topnav';

import "./main-layout.scss";

const MainLayout = () => {
  return (
    <Fragment>
      <Sidebar/>
      <div className='main'>
        <div className='main__content'>
          <Topnav/>
          <Outlet/>
        </div>
      </div>
    </Fragment>
  );
}

export default MainLayout;
