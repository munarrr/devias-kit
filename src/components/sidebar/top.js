import React from 'react'
import avatar from '../../img/Oval.png';
import './style.scss'

function Top() {
     return (
          <div className  ="top">
               <img className="top__img" src={avatar} alt='avatar'/>
               <h3 className="top__title">Roman Kutepov</h3>
               <p className="top__name">Brain Director</p>
             
          </div>
     )
}

export default Top;

