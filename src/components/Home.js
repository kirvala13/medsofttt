import React, { useState } from 'react'
import Buttons from './Buttons'
import { Table } from 'antd';
import useFetch from '../hooks/useFetch'

function Home() {
    const { data, isPanding } = useFetch("https://64d3873467b2662bf3dc5f5b.mockapi.io/family/patients/");
    const [edit, setEdit] = useState(null);
    const [check, setCheck] = useState(-1)
  

    // const columns = [
    //     {
    //         title: 'სახელი გვარი',
    //         dataIndex: 'fullName',
    //         key: 'fullName',
    //     },
    //     {
    //         title: 'დაბ თარიღი',
    //         dataIndex:"dob" ,
    //         key: 'dob',
    //     },
    //     {
    //         title: 'სქესი',
    //         dataIndex: 'address',
    //         key: 'address',
    //     },
    // ];
    return (
        <div>
            <Buttons edited={edit} pend={isPanding} check={check} />


            {/* <Table dataSource={data} columns={columns} />; */}
            <table>
                <tr>
                    <th>ID</th>
                    <th>პაციენტის გვარი სახელი</th>
                    <th>დაბ თარიღი</th>
                    <th>სქესი</th>
                    <th>მობ ნომერი</th>
                    <th>მისამართი</th>
                    <th>პირადი ნომერი</th>
                    <th>მეილი</th>
                </tr>

                {
                   isPanding?null:
                    data.map((res,i) => {
                        
                        return (

                            <tr 
                            onClick={(e)=>{
                                setEdit(res) 
                                setCheck(i)
                                i === check? setCheck(-1): setCheck(i)
                            }}
                            style={{
                                background: check === i ? 'lightblue' : 'white'
                              }}
                             key={res.id}>
                                <td>{res.id}</td>
                                <td>{res.fullName}</td>

                                <td> {new Date(res.dob * 1000).toLocaleDateString("de-De",{
                                    day:"2-digit",
                                    month:"2-digit",
                                    year:'numeric'
                                }) }</td>
                                <td>{res.genderId === "0" ? "მდედრობითი":"მამრობითი"}</td>
                                <td>{res.phone}</td>
                                <td>{res.address}</td>
                                <td>{res.personalNum}</td>
                                <td>{res.email}</td>
                            </tr>

                        )
                    })
                }
            </table>
        </div>
    )
}

export default Home