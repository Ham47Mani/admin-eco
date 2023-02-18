import React from 'react';

import './revenue-list.scss';
import { data } from '../../constants';
import Progressbar from '../progressbar/Progressbar';

const RevenueList = () => {
  return (
    <ul className='revenue-list'>
      {
        data.revenueByChannel.map((item, i) => (
          <li className='revenue-list__item' key={`revenue-${i}`}>
            <div className='revenue-list__item__title'>
              {item.title}
              <span className={item.value < 50 ? "txt-danger" : "txt-success"}>
                {item.value}%
              </span>
            </div>
            <div className='revenue-list__item__progressbar'>
              <Progressbar value={item.value}/>
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default RevenueList;
