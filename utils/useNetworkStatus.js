import { useEffect , useState } from "react";
// Example of Custom Hook

const useNetworkStatus = ()=>{

    const [status , setStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setStatus(false)
        });
     window.addEventListener("online",()=>{
            setStatus(true)
        });
    }, [])

    return status ;
}

export default useNetworkStatus ;