import React, { useEffect, useState } from 'react'
import Buttons from './Buttons'
import { Table } from 'antd';
import useFetch from '../hooks/useFetch'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/UserReducer';
import Selected from './Selected';

function Home() {
    const { data, isPanding } = useFetch("https://64d3873467b2662bf3dc5f5b.mockapi.io/family/patients/");
    const [edit, setEdit] = useState(null);
    const [check, setCheck] = useState(-1)
    
    const dispatch = useDispatch();
  
    const userNew = (data) => {
        dispatch(addUser(data))
    }
    const columns = [
        {
            title: 'სახელი გვარი',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'დაბ თარიღი',
            dataIndex: 'dob',
            key: 'dob',
            render:dob=> new Date(dob *1000).toLocaleDateString('de-DE',{
                day:"2-digit",
                month:"2-digit",
                year:"numeric"
            })
        },
        {
            title: 'სქესი',
            dataIndex: 'genderId',
            key: 'genderId',
            render: text => text === 0 ? "მდედრობითი" : "მამრობითი"
        },
        {
            title: 'ტელეფონი',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'მისამართი',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'პირადი ნომერი',
            dataIndex: 'personalNum',
            key: 'personalNum',
        },
        {
            title: 'მეილი',
            dataIndex: 'email',
            key: 'email',
        },
    ];
    return (
        <div style={{ margin:"40px 0px"}}>
            <Buttons edited={edit} pend={isPanding} check={check} setch={setCheck} />
            <Table onRow={(record, rowIndex) => {
                return {
                    onClick: (event) => {
                       userNew(record)
                       
                       rowIndex === check ? setCheck(-1) : setCheck(rowIndex)
                     }
                };
                
            }} columns={columns} dataSource={data} rowKey={"id"}  />
           {check=== -1 ? null : <Selected />}  
        </div>
    )
}

export default Home