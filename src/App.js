import './App.css';
import './Firebase.config';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Store from './components/Store';
import OrderSummary from './components/OrderSummary/OrderSummary';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Login from './components/LOGIN/Login';
import CheckOut from './components/CheckOut/CheckOut';
// import NotFound from './components/NotFound';


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path=':productId' element={<ProductDetails />} />
        {/* <Route path='/product/:productId' element={<ProductDetails />} /> */}
        <Route path='/order_summary' element={<OrderSummary />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/*' element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
