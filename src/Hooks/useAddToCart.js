import useCart from './useCart';
import useLocalStorage from './useLocalStorage';

const useAddToCart = () => {
    const [cart, setCart] = useCart();
    const { addToLocalStorage } = useLocalStorage();

    const handleAddtoCart = (data) => {
        addToLocalStorage(data._id);
        let newCart = [];
        const exists = cart.find((item) => item.id === data._id);
        if (!exists) {
            data.quantity = 1;
            newCart = [...cart, data];
        } else {
            const rest = cart.filter((item) => item.id !== data._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart)
    }

    return {
        cart,
        setCart,
        handleAddtoCart
    }
}

export default useAddToCart