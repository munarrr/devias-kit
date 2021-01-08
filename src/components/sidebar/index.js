import React from 'react'
import Top from './top';
import Middle from './middle';
import Bottom from './bottom';

function Sidebar() {
     return (
          <div className="sidebar col-3">
               <div className="sidebar__top"><Top /></div>
               <div className="sidebar__middle"><hr /><Middle /><hr /></div>
               <div className="sidebar__bottom"><Bottom /></div>
          </div>
     )
}

export default Sidebar;

