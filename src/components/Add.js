import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Button, Form, Input, Select } from 'antd';
function Add({ open, setPopup }) {
   
    //http request 
    const upMethod = (e) => {

        axios.post(`https://64d3873467b2662bf3dc5f5b.mockapi.io/family/patients/`, 
         {
            fullName: e.fullName,
            dob: Date.parse(e.dob)/1000,
            genderId:e.genderId,
            phone:e.phone,
            address:e.address,
            personalNum:e.personalNum,
            email:e.email
         }
        
        ).then(res =>
            console.log(res.data)
        ).catch(err=>console.log(err))
        setPopup(false)    
    }
 
  

    return (
        open ? (
            <div>
                <div className='pop'>
                    <Form autoComplete='off' onFinish={(value)=>{
                        upMethod(value)
                        
                    }}>
                        <Form.Item
                            style={{ height: "50px" }}
                            name="fullName"
                            label="სახელი გვარი"
                            rules={[
                                {
                                    required: true,
                                    message: "არა ვალიდური"
                                },
                                { whitespace: true },
                                { min: 3, message: "არავალიდური სახელი" }
                            ]}
                        >
                            <Input placeholder='სახელი გვარი' />
                        </Form.Item>
                        <Form.Item style={{ height: "50px" }} name="dob" label="დაბ თარიღი"
                         rules={[
                            {
                                required: true,
                                message: "არა ვალიდური"
                            }
                        ]}
                        >
                            <Input type='date'  />
                        </Form.Item>

                        <Form.Item style={{ height: "50px" }} name="genderId" label="სქესი"  
                        rules={[
                                {
                                    required: true,
                                    message: "არა ვალიდური"
                                }
                            ]} >
                            <Select placeholder="აირჩიე სქესი">
                                <Select.Option value="1">მამრობითი</Select.Option>
                                <Select.Option value="0" >მდედრობითი</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item style={{ height: "50px" }} name="phone" label="მობ ნომერი"  
                        rules={[
                            {
                                required: true,
                                message: "არა ვალიდური"
                            },
                            { pattern: new RegExp(/^5\d{8,9}$/) , message: "არასწორი  ნომერი" }
                        ]}>

                            <Input type='number' placeholder='მობილურის ნომერი' value="" />
                            
                        </Form.Item>

                        
                        <Form.Item style={{ height: "50px" }} name="address" label="მისამართი"
                         rules={[
                            {
                                required: true,
                                message: "არა ვალიდური"
                            }
                        ]}>
                            <Select placeholder="მისამართი">
                                <Select.Option value="თელავი">თელავი</Select.Option>
                                <Select.Option value="თბილისი" >თბილისი</Select.Option>
                                <Select.Option value="გორი" >გორი</Select.Option>
                                <Select.Option value="ბათუმი" >ბათუმი</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item style={{ height: "50px" }} name="personalNum" label="პირადი ნომერი"
                         rules={[
                            {
                                required: true,
                                message: "ეს ველი სავალდებულოა"
                            },
                            { min:11, message: "არასწორი პირადი ნომერი"  },
                            { max: 11, message: "არასწორი პირადი ნომერი" }
                        ]}
                        >
                            <Input type='number' placeholder='პირადი ნომერი' />
                        </Form.Item>

                        <Form.Item style={{ height: "50px" }}
                            name="email" label="მეილი"
                            rules={[
                                {
                                    required: true,
                                    message: "არა ვალიდური"
                                },
                                { type: 'email', message: "არასწორი მეილი" },
                            ]}>
                            <Input  type='email' placeholder='მეილი'  />
                        </Form.Item>

                        <Form.Item   >
                            <div style={{ display: 'flex', gap: "5px", alignItems: "baseline" }}>
                                <Button type='primary' htmlType='submit' >
                                    დამატება
                                </Button>
                                <Button type='primary' style={{ marginTop: "10px" }} danger htmlType='submit' onClick={() => setPopup(false)}>
                                    დახურვა
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                

                </div>
            </div>
        ) : null
    )
}

export default Add
