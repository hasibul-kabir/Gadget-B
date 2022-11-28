import '../CSS/item.css'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
    const navigate = useNavigate();
    const { handleAddToCart } = props;
    const { title, description, price, image, _id } = props.data;
    const handleProductDetails = (pId) => {
        navigate(`/product/${pId}`)
    }
    return (
        <div className='item'>
            <img src={image} alt="" />
            <div className='card-content'>
                <p className='title'>{title.length > 15 ? title.slice(0, 15) + '...' : title}</p>
                <p className='description'>{description.length > 50 ? description.slice(0, 50) + '...' : description}</p>
                <p className='price'>$ {price}</p>
            </div>
            <div className='buttons'>
                <div onClick={() => handleProductDetails(_id)} className='details-btn'>Details</div>
                <div className='add-cart' onClick={() => handleAddToCart(props.data)}>
                    <div className='txt'><p>Add to cart</p></div>
                    <ShoppingCartIcon style={{ color: 'white' }} />
                </div>
            </div>

        </div>
    )
}

export default Item