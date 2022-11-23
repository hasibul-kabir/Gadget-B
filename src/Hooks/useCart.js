import { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage';
import useItems from './useItems';

const useCart = () => {
    const [items] = useItems();
    const [cart, setCart] = useState([]);

    const { localstorageData } = useLocalStorage();
    //fetch cart 
    useEffect(() => {
        const shoppingCart = localstorageData();
        const arr = [];
        for (const id in shoppingCart) {
            const addedItems = items.find(item => item._id === id)
            if (addedItems) {
                const quantity = shoppingCart[id];
                addedItems.quantity = quantity;
                arr.push(addedItems)
            }
        }
        setCart(arr)
    }, [items])
    return [cart, setCart]
}

export default useCart