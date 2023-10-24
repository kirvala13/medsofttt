import { Table } from 'antd';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Selected() {
    const[gend,setGend]=useState("") 
    const disDate = useSelector((state) => {
        return state.users.users
    })

   
    const result =
     disDate[0]?.genderId === "0" ? "მდედრობითი" 
    :disDate[0]?.genderId === "1"
    ?'მამრობითი'
    : '';
    
    return (
        <>
            
                <div style={{ margin: "0px 0px 40px" }}>
                    <p>{disDate[0]?.fullName}</p>
                    <p>{  new Date(disDate[0]?.dob * 1000).toLocaleDateString('de-DE', {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric"
                    })}</p>
                    <p>{result}</p>
                    <p>{disDate[0]?.phone}</p>
                    <p>{disDate[0]?.address}</p>
                    <p>{disDate[0]?.personalNum}</p>
                    <p>{disDate[0]?.email}</p>
                </div>

          
        </>
    )
}

export default Selected