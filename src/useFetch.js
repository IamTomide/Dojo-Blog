import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setdata(data);
                setisPending(false);
                setError(null);
            })
            .catch(err => {
                setisPending(false);
                setError(err.message);
            })
        }, 1000);
    }, [url]);
    
    return { data, isPending, error };
}

export default useFetch;