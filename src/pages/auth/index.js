import React , {Component} from 'react'
import App from '../../App'
import {Link} from 'react-router-dom'
import Modal from './modal'
import './style.scss'

class Auth extends Component {
     state = {
          count :0 ,
     }
     handleClick = () => {
         this.setState(({count}) => ({
               count: ++count ,
         })
         )}
         handleClickMunis = () => {
              this.setState(({count}) => ({
                   count: --count,
              })
              )}
 render () {

 const {count} = this.state;
      return (
          <div>
               <div>{count}</div>
               <button onClick={this.handleClick}>+</button>
                <button onClick={this.handleClickMunis}>-</button>
                <Modal />
          
          </div>
          
      )
 }
}
export default Auth;
