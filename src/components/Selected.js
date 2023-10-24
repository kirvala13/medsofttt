import { Table } from 'antd';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Selected() {
    const disDate = useSelector((state)=>{
        return state.users.users[0]
    })

  return (
    <div style={{ margin:"0px 0px 40px"}}>
        <p>{disDate.fullName}</p>
        <p>{new Date(disDate.dob * 1000).toLocaleDateString('de-DE', {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            })}</p>
        <p>{disDate.genderId==="0"?"მდედრობითი":"მამრობითი"}</p>
        <p>{disDate.phone}</p>
        <p>{disDate.address}</p>
        <p>{disDate.personalNum}</p>
        <p>{disDate.email}</p>
    </div>
  )
}

export default Selected