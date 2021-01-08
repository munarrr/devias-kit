import React from 'react';
import './style.scss';
import ProductHeader from './ProductHeader';
import ProductItem from './ProductItem';
import SearchBar from './SearchBar';
import axios from 'axios';
import { GreenBtn } from '../../components/btns';
import Modal from './modal';

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [modalActive, setModalActive] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('')

  React.useEffect(() => {
    axios
      .get('http://localhost:3000/database.json')
      .then((response) => response.data.products)
      .then((item) => setProducts(item));
  }, []);
  return (
    <section className='products'>
      {modalActive && <Modal setProducts={setProducts} products={products} setActiveModal={setModalActive} />}
      <div className='container section__container'>
        <ProductHeader />
        <div className='d-flex-between'>
          <SearchBar setSearchValue={setSearchValue}/>
          <div onClick={() => setModalActive(true)}>
            <GreenBtn text={'New product'} />
          </div>
        </div>
        <div className='row products__wrapper'>
        
        </div>
      </div>
    </section>
  );
};

export default Products;
