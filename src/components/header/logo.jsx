import React from 'react';
import logo from  '../../img/Logo.svg';



const Logo = () => {
     return (
          <div className="logo">
               <a className ="logo__link" href="index.html">
                    <img src={logo} alt='logotip'/>
                    <span>Devias Kit</span>
                                  </a>
          </div>
     );
};

export default Logo;

