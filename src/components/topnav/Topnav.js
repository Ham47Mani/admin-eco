import React from 'react';
import UserInfo from '../user-info/UserInfo';
import { data } from '../../constants';

import "./topnav.scss";

const Topnav = () => {
  const openSidebar = () => {
    document.body.classList.add("sidebar-open");
  }

  return (
    <nav className='topnav'>
      <UserInfo user={data.user}/>
      <div className='sidebar-toggle' onClick={openSidebar}>
        <i className='bx bx-menu-alt-right'></i>
      </div>
    </nav>
  );
}

export default Topnav;
