import React from 'react'
import {icons} from  './const';

function Icon() {
     return (
          <div className="icons">
             <nav className="icons__menu">
               <ul className="icons__list">
                    {icons.map((item) =>(
                         <ul className="icons__items" key={item}>
                              <a className="icons__link" href={item}>
                                   <img src={item}  alt='icon'/>
                              </a>
                         </ul>
                    ))}
                    </ul>     
             </nav>  
          </div>
     )
}

export default Icon;

