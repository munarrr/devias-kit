import React from 'react'
import Button from '@material-ui/core/Button'
import Bacgrand from '../../assets/product.png'
import Card from '../../assets/product-card.png'
import './product.scss'
import axios from 'axios'


const Product = () => {
     const [newProduct,setNewProduct] = React.useState({
          title: '',
          description: '',
          img : "",
          date : ''
     })
     const saveProduct = (event) =>{
           ({
               title: event.target.form[1].value,
          })
     }
     const submitData = (event) =>{
          event.preventDefault()
          setProducts([...products, newProduct])
          setNewProduct({
               title: ""
          })
     }
     const [Modal,setModal] = React.useState(false)
     const handleModal = () =>{
          setModal(Modal ? false : true)
     }
     const [products,setProducts] = React.useState([])
     React.useEffect(async () => {
        await axios
        .get('http://localhost:3000/database.json')
        .then((res) => res)
        .then(({data}) => setProducts(data.cards))
              
     }, []);
     return (
          <div className="product">
               {Modal && (
                    <div className='modal'>
          <div className="modal__body">
            <h3 className="modal__title">Create a new user</h3>
            <h6 className="modal__suptitle">Add main information about user</h6>
            <form className="modal__form" onSubmit={() =>{submitData}}>
              <input
              value={products}
               onSubmit={() => {saveProduct}}
                type='text'
                placeholder='Введите Имя Пользователя'
              />
              <input
               
                type='text'
                placeholder='Введите путь к картинке'
              />
              <input
               
                type='text'
                placeholder='Введите ID'
              />
              <input
             
                type='text'
                placeholder='Введите номер телефона'
              />
              <input
                o
                type='text'
                placeholder='Введите почту пользователя'
              />
              <button>Добавить пользователя</button>
            </form>
          </div>
          </div>
         
               )}
               <img className="product__img" src={Bacgrand} alt="poto" />
               <label className='manage__search'>
                    <input type='text' placeholder='Search users by name, id' />
               </label>
               <Button variant="contained" onClick={handleModal}>
                    NEW PRODUCT
                </Button>
                <div className="product__cards">
                   {products.map((item,index) => {
                          return (
                               <div className="product__item" key={item + index}>
                               <img className="product__img" src={Card} alt="cards-product" />
                                    <h3 className="poduct__title">{item.title}</h3>
                                    <p className="product__text">{item.text}</p>
                               <div className="product__card-footer">
                                    <div className="product__card-date flex">
                                         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <rect x="-2" y="-2" width="24" height="24" fill="#66788A" />
                                         </svg>
                                         <p className="product__card-text">Updated 2 hr ago</p>
                                    </div>
                                    <div className="product__card-update flex">
                                         <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <rect x="-5" y="-3" width="24" height="24" fill="#66788A" />
                                         </svg>

                                         <p className="product__card-pdate">594 Downloads</p>
                                    </div>
                               </div>
                              
                          </div>
                          );
                     })}
                  
                </div>
          </div>
     )
}

export default Product

