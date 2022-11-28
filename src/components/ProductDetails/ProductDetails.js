import '../../CSS/productDetails.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from './StarRating';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useAddToCart from '../../Hooks/useAddToCart';
import CartShortCut from '../CartShortCut';


const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { cart, handleAddtoCart } = useAddToCart();

    useEffect(() => {
        fetch(`https://mighty-oasis-19752.herokuapp.com/product/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message);
                console.log(error.message);
                setLoading(false)
            })

    }, []);

    return (
        <>
            {
                error && (
                    <div style={{ textAlign: 'center' }}>
                        <h4 style={{ color: 'red' }}>{error}</h4>
                    </div>)
            }
            {
                !error && loading && (
                    <div style={{ textAlign: 'center' }}>
                        <h5>Loading...</h5>
                    </div>)
            }
            {
                !error && !loading && product && (
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
                            <div><p>Add To Cart</p></div>
                            <ShoppingCartIcon />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default ProductDetails