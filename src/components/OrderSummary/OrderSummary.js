import './orderSummary.css'
import React from 'react'
import Cart from '../Cart'
import OrderedProduct from './OrderedProduct'
import useRemoveOrder from '../../Hooks/useRemoveOrder';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../Hooks/useLocalStorage';


const OrderSummary = () => {
    const { deleteLocalStorage } = useLocalStorage();
    const { handleRemove, cart } = useRemoveOrder();
    const navigate = useNavigate();

    const redirectToCheckout = () => {
        navigate('/checkout')
    }
    return (
        <div className='order-summary'>
            <div>
                <h2>Review Your Orders</h2>
                <div className='ordered-products'>
                    {
                        cart?.map((product) =>
                            <OrderedProduct key={product.id} handleRemove={handleRemove} product={product} />
                        )
                    }
                </div>
            </div>
            <Cart cart={cart}>
                {
                    cart.length > 0 &&
                    <button className='checkOut-btn' onClick={redirectToCheckout}>Checkout</button>

                }
            </Cart>
        </div>
    )
}

export default OrderSummary