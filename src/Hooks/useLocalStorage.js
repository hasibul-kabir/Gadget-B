import React from 'react'

const useLocalStorage = () => {

    let shoppingCart = {};
    const addToLocalStorage = (id) => {

        // const storedCart = localStorage.getItem('cart');
        // if (storedCart) {
        //     shoppingCart = JSON.parse(storedCart);
        // }
        localstorageData();

        //add quantity
        const quantity = shoppingCart[id];
        if (quantity) {
            const newQuantity = quantity + 1;
            shoppingCart[id] = newQuantity;
        } else {
            shoppingCart[id] = 1;
        }
        localStorage.setItem('cart', JSON.stringify(shoppingCart))
    }


    const removeFromLocalStorage = (id) => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            shoppingCart = JSON.parse(storedCart);
        }
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('cart', JSON.stringify(shoppingCart))
        }
    }

    const deleteLocalStorage = () => {
        localStorage.removeItem('cart');
    }

    const localstorageData = () => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            shoppingCart = JSON.parse(storedCart);
        }
        return shoppingCart;
    }

    return { addToLocalStorage, removeFromLocalStorage, deleteLocalStorage, localstorageData }
}

export default useLocalStorage