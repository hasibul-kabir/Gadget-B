import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";

const useAuthUser = (auth) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
                // ...
            } else {
                setLoading(false);
                setUser(null)
            }
        });
    }, [auth])
    return {
        user,
        loading
    }
}

export default useAuthUser