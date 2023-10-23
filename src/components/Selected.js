import { Table } from 'antd';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Selected() {
     

    const disDate = useSelector((state)=>{
        return state.users.users
    })
   
  return (
    <div style={{ margin:"0px 0px 40px"}}>
        <p>{disDate.fullName}</p>
        <p>{disDate.dob}</p>
        <p>{disDate.genderId}</p>
        <p>{disDate.phone}</p>
        <p>{disDate.address}</p>
        <p>{disDate.personalNum}</p>
        <p>{disDate.email}</p>
    </div>
  )
}

export default Selected