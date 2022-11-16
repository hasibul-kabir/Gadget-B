import '../CSS/cart.css'
import React from 'react'

const Cart = (props) => {
    const { cart } = props;

    let quantity = 0;
    let totalPrice = 0;
    for (const item of cart) {
        quantity = quantity + item.quantity;
        totalPrice = totalPrice + item.price * item.quantity;
    }
    return (
        <div className='cart'>
            <p>Products: {quantity}</p>
            <p>Total price: $ {totalPrice}</p>
            {
                props.children
            }
        </div>
    )
}

export default Cart