import React from 'react'
import support from '../../img/support.svg';

function Bottom() {
     return (
          <div className="bottom">
               <p className="bottom__title">Support</p>
               <div className="bottom__support">
                    <img src= {support}/>
                    <span className="support__span">support</span>
               </div> 
          </div>
     )
}

export default Bottom;

