import React from 'react';
import './index.scss'
import {Route} from 'react-router-dom'
import Header from './components/header';
import Sidebar from './components/sidebar';
import Manage from './pages/manage/index';
import Dashboard from './pages/dashboard';
import Product from './pages/product/index';





function App() {
  return (
    <div className='App'>   
      <Header />      
      <Sidebar />
      <Route  path='/dashboard' component={Dashboard}/>
      <Route path='/users' component={Manage}/>
      <Route path='/products' component={Product} />
    </div>
  );
}

export default App;
