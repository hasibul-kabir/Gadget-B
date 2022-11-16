import '../CSS/items.css'
import React from 'react'
import Item from './Item'

const Items = (props) => {
    const { items, handleAddToCart } = props;
    return (
        <div className='items'>
            {
                items.map((item) => (
                    <Item key={item.id} data={item} handleAddToCart={handleAddToCart} />
                ))
            }
        </div>
    )
}

export default Items