import React, { useEffect, useState } from 'react';
import {images} from "../../constants/index";
import sidebarNav from "../../configs/sidebarNav";

import "./sidebar.scss";
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const curPath = window.location.pathname.split('/')[1];
    const activeItem = sidebarNav.findIndex(item => item.section === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  const closeSideBar = () => {
    document.querySelector(".main__content").style.transform= `scale(1) translateX(0)`;
    setTimeout(()=> {
      document.body.classList.remove("sidebar-open");
      document.querySelector(".main__content").style.transform= ``;
    }, 500);
  }
  
  return (
    <aside className='sidebar'>
      <div className='sidebar__logo'>
        <img src={images.logo} alt='logo'/>
        <div className='sidebar__logo__close' onClick={closeSideBar}>
          <i className='bx bx-x'></i>
        </div>
      </div>
      <div className='sidebar__menu'>
        {
          sidebarNav.map((item, i) => (
            <Link 
              to={item.link} 
              key={`nav-${i}`} 
              className={`sidebar__menu__item ${activeIndex === i ? "active" : ""}`}
              onClick={closeSideBar}
            >
              <div className='sidebar__menu__item__icon'>{item.icon}</div>
              <div className='sidebar__menu__item__text'>{item.text}</div>
            </Link>
          ))
        }
        <div className='sidebar__menu__item'>
          <div className='sidebar__menu__item__icon'>
            <i className='bx bx-log-out'></i>
          </div>
          <div className='sidebar__menu__item__text'>Logout</div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
