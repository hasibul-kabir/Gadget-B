import './orderSummary.css'
import React from 'react'
import Cart from '../Cart'
import OrderedProduct from './OrderedProduct'
import useRemoveOrder from '../../Hooks/useRemoveOrder';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.config';
import useAuthUser from '../../Hooks/Authentications/useAuthUser';


const OrderSummary = () => {
    const { user } = useAuthUser(auth);
    // const [cart] = useCart();
    const { handleRemove, cart } = useRemoveOrder();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectToCheckout = () => {
        // <Navigate to='checkout'  replace={true} />
        navigate('/checkout')
    }
    return (
        <div className='order-summary'>
            <div>
                <h2>Review Your Orders</h2>
                <div className='ordered-products'>
                    {
                        cart.map((product) =>
                            <OrderedProduct key={product.id} handleRemove={handleRemove} product={product} />
                        )
                    }
                </div>
            </div>
            <Cart cart={cart}>
                <button className='checkOut-btn' onClick={redirectToCheckout}>Checkout</button>
                <button className='remove-btn'>Remove All</button>
            </Cart>
        </div>
    )
}

export default OrderSummary