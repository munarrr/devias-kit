import React from 'react'

const Modal = () => {
     const [active,setAcive] = React.useState(false)
    const handliModal = () =>{
          if(setAcive) {
               setAcive(true)
          }
          else setAcive(false)
     }
     return (
          <div className="modal">
               <button onClick={()=>{handliModal}}>Модалка</button>
               <div className="modal-body">
                    <p>lodjvodfhvlfbd/lgjbfxgjbld</p>
                    <p>lodjvodfhvlfbd/lgjbfxgjbld</p>
                    <p>lodjvodfhvlfbd/lgjbfxgjbld</p>
               </div>
          </div>
     )
}

export default Modal

