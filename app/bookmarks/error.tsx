"use client"

import {useEffect} from "react";

interface ErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

const ErrorPage = ({reset, error}: ErrorProps) =>{
    useEffect(() => {
        console.error(error)
    }, [error])
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    )
}

export default ErrorPage;