import { useState, useEffect } from 'react'

const useItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    //fetch all data
    useEffect(() => {
        fetch('fakeData.json')
            .then((response) => response.json())
            .then((data) => setItems(data))
            .then(setLoading(false))
            .catch(setLoading(false))
    }, [])

    return [items, loading]

}

export default useItems