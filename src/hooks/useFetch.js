import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const[data,setData]=useState(null);
    const[isPanding,setIspending]=useState(true);
    
   useEffect(()=>{
   const tm =  setTimeout(() => {
    axios.get(url).then(res=>{ 
       setData(res.data);
      
       setIspending(false)   
     }).catch(err=> clearTimeout(tm)) 
    }, 1000)
   //  !isPanding&&clearTimeout(tm)
   
   },[data])
   return {data, isPanding}
}

export default useFetch