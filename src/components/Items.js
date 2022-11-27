import '../CSS/items.css'
import React, { useEffect, useState } from 'react'
import Item from './Item'

const Items = (props) => {
    const { items, handleAddToCart } = props;

    return (
        <div className='items'>
            {
                items.map((item) => (
                    <Item key={item._id} data={item} handleAddToCart={handleAddToCart} />
                ))
            }
        </div>
    )
}

export default Items