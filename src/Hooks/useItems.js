import { useState, useEffect } from 'react'


const useItems = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    //fetch all data
    useEffect(() => {
        fetch('https://gadget-b.onrender.com/products')
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message)
                setLoading(false)
            })

    }, []);

    return [items, loading, error]

}

export default useItems