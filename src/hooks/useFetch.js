import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const[data,setData]=useState(null);
    const[isPanding,setIspending]=useState(true);
    
   useEffect(()=>{
    setTimeout(() => {
    axios.get(url).then(res=>{ 
       setData(res.data);
       setIspending(false)   
     }).catch(err=>console.log(err)) 
    }, 1000)
   },[data])
   return {data, isPanding}
}

export default useFetch