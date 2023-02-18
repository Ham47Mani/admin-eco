import React from 'react';

import "./box.scss";

const Box = props => {
  const className = {
    box: "box",
    purple: props.purple && 'box-purple',
    fullHight: props.fullHight && 'box-fullhight'
  }
  
  return (
    <div className={Object.values(className).join(' ')}>
      {props.children}
    </div>
  );
}

export default Box;
