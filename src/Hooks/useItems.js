import { useState, useEffect } from 'react'

const useItems = () => {
    const [items, setItems] = useState([]);
    //fetch all data
    useEffect(() => {
        fetch('fakeData.json')
            .then((response) => response.json())
            .then((data) => setItems(data))
    }, [])

    return [items]

}

export default useItems