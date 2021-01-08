import React from 'react'; 
import Logo from './logo';
import Icons from  './icon';
import './style.scss';


const Header = ()  => { 
 return(
     <div class="container">
       <div className="header__logo"> <Logo /> </div>
       <div className="header__icons"> <Icons /></div>
     </div>
 )
};
export default Header;
