import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const OrderedProduct = ({ product, handleRemove }) => {

    const { title, quantity, price, image, id } = product;
    return (
        <div className='ordered-product'>
            <img src={image} alt='productImg' />
            <div className='ordered-product-info'>
                <h5>{title}</h5>
                <p><strong>Price:</strong> ${price}</p>
                <p><strong>Quantity:</strong> {quantity} </p>
            </div>
            <div className='delete'>
                <DeleteIcon className='del-icon' onClick={() => handleRemove(id)} />
            </div>
        </div>
    )
}

export default OrderedProduct