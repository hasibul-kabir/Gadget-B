import './orderSummary.css'
import React from 'react'
import Cart from '../Cart'
import OrderedProduct from './OrderedProduct'
import useRemoveOrder from '../../Hooks/useRemoveOrder';
import { useNavigate } from 'react-router-dom';


const OrderSummary = () => {
    const { handleRemove, cart } = useRemoveOrder();
    const navigate = useNavigate();

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