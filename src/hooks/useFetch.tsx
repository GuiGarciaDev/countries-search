import { useEffect, useState } from "react";

export default function useFetch<T = unknown>(url: string) {
    const [data, setData] = useState<T | undefined>(undefined);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => setError(err))
            .finally(() => {
                setIsFetching(false)
            })
    }, [])

    return { data, isFetching, error }
}