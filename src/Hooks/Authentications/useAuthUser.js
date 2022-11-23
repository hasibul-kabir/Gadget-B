import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";

const useAuthUser = (auth) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
                // ...
            } else {
                setError(true);
                setLoading(false);
                setUser(null);
            }
        });
    }, [auth])
    return {
        user,
        loading,
        error
    }
}

export default useAuthUser