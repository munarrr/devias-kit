import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Manage from './pages/manage/index';
import Products from './pages/products';
import Dashboard from './pages/dashboard';
import axios from 'axios';
import {Route} from 'react-router-dom';


function App () {
  return (
   
    <div className="App">
    <Header  />
    <Sidebar /> 
    <Route  exact  path="/Dashboard" component={Dashboard}/>
    <Route  path="/media" component={Manage}/>
    <Route  path="/products" component={Products}/>
</div>
   
   
   
   
  );
}

export default App;


