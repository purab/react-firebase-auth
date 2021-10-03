import React,{useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'

const LoadingToRedirect = () => {
    const [count, setConunt ] = useState(5);
    const history = useHistory();

    useEffect(()=> {
        const interval = setInterval(()=>{
            setConunt((currentCount)=> --currentCount)
        },1000)
        count === 0 && history.push('/login')
        return () => clearInterval(interval)
    },[count,history])
    return (
        <div>
            <p>Redirecting you in {count} seconds</p>
        </div>
    )
}

export default LoadingToRedirect
