import React from 'react'
import {sidebarMenu,imgMen} from './const';
import {Link} from 'react-router-dom';

function Middle() {
     return (
          <div className="bottom">
               <nav className ="bottom__menu">
                    {sidebarMenu.map((item,index) =>{
                         return(
                              <ul className="bottom__item">
                               <li className="bottom__list">
                                   <Link className="bottom__link" to={item.link}>
                                   <img src={imgMen[index]} alt='nav-icon' />
                                     <span>{item.text}</span>
                                   </Link>
                              </li>
                         </ul>
                         );
                    })}
               </nav>
          </div>
     )
}

export default Middle
