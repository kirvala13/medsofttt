import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function useFetch(url,retries = 3) {
    const[data,setData]=useState(null);
    const[isPanding,setIspending]=useState(true);
    const [error, setError] = useState(null);
    const disDate = useSelector((state) => {
      return state.users.users
  })
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(url);
          setData(response.data);
          setIspending(false);
          
        } catch (err) {
          setError(err);
          setIspending(false);
        }
      };
  
      fetchData();
    }, [disDate]);
  
    return { data, isPanding, error };
}

export default useFetch