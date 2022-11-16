import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";

const useAuthUser = (auth) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setUser(user);
                setLoading(false);
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])
    return {
        user,
        loading
    }
}

export default useAuthUser