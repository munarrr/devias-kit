import Sidebar from './components/sidebar/index'
import Header from './components/header/index'
import {Route} from 'react-router-dom'
import Manage from './pages/manage/index'
import Product from './pages/product/index'


function App() {
  return (
    <div className="App">
      <Header />
      hi
      <Sidebar />
      <Manage />
      <Route path="/" components={Manage} />
      <Route path="/products" components={Product} />
    </div>
  );
}

export default App;
