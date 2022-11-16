import '../CSS/item.css'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
    const navigate = useNavigate();
    const { handleAddToCart } = props;
    const { title, description, price, image, id } = props.data;
    const handleProductDetails = (pId) => {
        navigate(`/${pId}`)
    }
    return (
        <div className='item'>
            <img src={image} alt="" />
            <div className='card-content'>
                <p className='title'>{title.length > 18 ? title.slice(0, 18) + '...' : title}</p>
                <p className='description'>{description.length > 55 ? description.slice(0, 55) + '...' : description}</p>
                <p className='price'>$ {price}</p>
            </div>
            <div onClick={() => handleProductDetails(id)} className='details-btn'>Details</div>
            <div className='card-footer' onClick={() => handleAddToCart(props.data)}>
                <p>Add to cart</p>
                <ShoppingCartIcon style={{ color: 'white' }} />
            </div>

        </div>
    )
}

export default Item