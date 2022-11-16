import '../CSS/store.css'
import React from 'react'
import Items from './Items'
import useItems from '../Hooks/useItems'
import useAddToCart from '../Hooks/useAddToCart'
import CartShortCut from './CartShortCut'

const Store = () => {
    const [items] = useItems();
    const { cart, handleAddtoCart } = useAddToCart();

    return (
        <div className='store'>
            <Items items={items} handleAddToCart={handleAddtoCart} />
            <CartShortCut cart={cart} />
        </div>
    )
}

export default Store