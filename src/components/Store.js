import '../CSS/store.css';
import React, { useEffect, useState } from 'react';
import Items from './Items';
import useItems from '../Hooks/useItems';
import useAddToCart from '../Hooks/useAddToCart';
import CartShortCut from './CartShortCut';
import { getAuth } from 'firebase/auth';


const Store = () => {
    const auth = getAuth();
    const [items, setItems] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const { cart, handleAddtoCart } = useAddToCart();
    const [pageCount, setPageCount] = useState(0);
    const [selectedPage, setSelectedPage] = useState(0);
    //fetch all data
    useEffect(() => {
        fetch(`https://mighty-oasis-19752.herokuapp.com/products?selectedPage=${selectedPage}&product=6`)
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message)
                setLoading(false)
            })

    }, [selectedPage]);

    useEffect(() => {
        fetch('https://mighty-oasis-19752.herokuapp.com/productCount')
            .then((respones) => respones.json())
            .then((count) => {
                const pageCount = Math.ceil(count.productCount / 6)
                setPageCount(pageCount);
            })
    }, [])

    return (
        <>
            {
                loading && (
                    <h5 style={{ textAlign: 'center' }}>Loading...</h5>
                )
            }
            {
                !loading && error &&
                (
                    <h5 style={{ textAlign: 'center', color: 'red' }}>{error}</h5>
                )
            }
            {
                !loading && !error && items &&

                <>
                    <div className='store'>
                        <Items items={items} handleAddToCart={handleAddtoCart} />
                        <CartShortCut cart={cart} />
                    </div>
                    <div className='paginations'>
                        {
                            [...Array(pageCount).keys()].map((pageNo) =>
                                <button
                                    className={selectedPage === pageNo ? 'selected' : ''}
                                    onClick={() => setSelectedPage(pageNo)}
                                >
                                    {pageNo + 1}
                                </button>
                            )
                        }
                    </div>
                </>

            }
        </>
    )
}

export default Store