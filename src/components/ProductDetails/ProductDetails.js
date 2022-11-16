import '../../CSS/productDetails.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import StarRating from './StarRating';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useAddToCart from '../../Hooks/useAddToCart';
import CartShortCut from '../CartShortCut';

const ProductDetails = () => {
    const { productId } = useParams();
    const [items] = useItems();
    const { cart, handleAddtoCart } = useAddToCart();

    const product = items.find(item => item.id === productId);

    return (
        product &&

        <div className='product-details'>
            <CartShortCut cart={cart} />
            <div className='product-img'><img src={product?.image} alt='productImage' /></div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p><span>Category: </span>{product.category}</p>
            <p><span>Brand: </span>{product.brand}</p>
            <p><span>Stock: </span>{product.stock}</p>
            <p><span>Price: </span>${product.price}</p>
            <StarRating rating={product.rating} />
            <div className='add-btn' onClick={() => handleAddtoCart(product)}>
                <p>Add To Cart</p>
                <ShoppingCartIcon />
            </div>
        </div>
    )
}

export default ProductDetails