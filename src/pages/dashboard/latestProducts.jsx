import React from 'react'
import {cardsData} from './const'

function LatesProucts() {
     return (
          <div className="row">
               {cardsData.map((item) =>{
                return(
                    <div className="productlates">
                    <img className="productlates__logo" src={item.icon}></img>
                    <div>
                    <h4 className="productlates__title">{item.persent}</h4>             
                  </div>
          </div>
               )})}
         </div>
     )
}

export default LatesProucts;

