import { useState,useEffect } from "react";

export default function Timer() {

    const [count, setCount] = useState(0);

    useEffect(() => {
setCount(count+1)
    },[])
    return (<>
   you have rendered {count} times</>)
}