import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FirebaseConfig';
import { Routes, Route } from 'react-router-dom';
import PrivateOutlet from './components/Outlets/PrivateOutlet';
import Nav from './components/Nav';
import Store from './components/Store';
import OrderSummary from './components/OrderSummary/OrderSummary';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Login from './components/LOGIN/Login';
import CheckOut from './components/CheckOut/CheckOut';
import Signup from './components/Registration/Signup';
// import NotFound from './components/NotFound';


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/order_summary' element={<OrderSummary />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/*' element={<PrivateOutlet />}>
          <Route path='checkout' element={<CheckOut />} />
        </Route>
        {/* <Route path='/*' element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
