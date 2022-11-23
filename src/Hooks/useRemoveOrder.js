import useCart from './useCart';
import useLocalStorage from './useLocalStorage';

const useRemoveOrder = () => {
    const [cart, setCart] = useCart();
    const { removeFromLocalStorage } = useLocalStorage();

    const handleRemove = (id) => {
        removeFromLocalStorage(id);
        let newCart = [];
        const exists = cart.find((item) => item._id === id);
        if (exists) {
            const rest = cart.filter((item) => item._id !== id);
            newCart = [...rest]
        }
        setCart(newCart)
    }

    return {
        handleRemove,
        cart
    }
}

export default useRemoveOrder