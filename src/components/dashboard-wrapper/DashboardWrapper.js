import React from 'react';

import "./dashboard-wrapper.scss";

const DashboardWrapper = ({children}) => {
  return (
    <div className='dashboard-wrapper'>
      {children}
    </div>
  );
}

export default DashboardWrapper;

// =================== Start Dashboard Wrapper Main Components ========================== 
export const DashboardWrapperMain = ({children}) => {
  return (
    <div className='dashboard-wrapper__main'>
      {children}
    </div>
  )
}
// =================== End Dashboard Wrapper Main Components ========================== 

// =================== Start Dashboard Wrapper Right Components ========================== 
export const DashboardWrapperRight = ({children}) => {
  return (
    <div className='dashboard-wrapper__right'>
      {children}
    </div>
  )
}
// =================== End Dashboard Wrapper Right Components ========================== 
