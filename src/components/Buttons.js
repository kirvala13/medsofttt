import React, { useState } from 'react'
import delet from "../assets/clear.png";
import edit from "../assets/edit.png";
import add from "../assets/plus.png";
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';
import { Form, Input, Button } from 'antd';
import { useSelector } from 'react-redux';

function Buttons({ edited, pend, check,setch }) {
    const [popup, setPopup] = useState(false);
    const [eedit, setEdit] = useState(false);
    const [deletePat, setDelete] = useState(false);
    const [form] = Form.useForm();
    const disDate = useSelector((state)=>{
        return state.users.users
    })
    const handleSetFieldValue = () => {
        const date = new Date(disDate?.dob * 1000); // Multiply by 1000 to convert seconds to milliseconds

        // Get the year, month, and day
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based, so add 1
        const day = date.getDate().toString().padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        // Set a specific field's value
        form.setFieldsValue({
            fullName: disDate.fullName,
            dob: formattedDate,
            genderId: disDate.genderId=== "0" ? "მდედრობითი" : "მამრობითი" ,
            phone: disDate.phone,
            address: disDate.address,
            personalNum: disDate.personalNum,
            email: disDate.email
        });
    };
    return (
        <div className='button'>
            <Add open={popup} setPopup={setPopup} />
            <Button type='primary' onClick={() => setPopup(true)}> <img src={add} alt='add' /> დამატება </Button>
            <Button type="dashed" onClick={() =>(setEdit(true), handleSetFieldValue())} 
                disabled={check === -1} > 
                <img src={edit} alt='add' />
                 რედაქტირება
            </Button>
            <Edit setch={setch} form={form} open={eedit} edited={edited} setEdit={setEdit} pend={pend} />
            <Button type="primary" danger onClick={() => setDelete(true)} disabled={check === -1}><img src={delet} alt='add' /> წაშლა </Button>
            <Delete setch={setch} open={deletePat} edited={edited} setDelete={setDelete} />
        </div>
    )
}

export default Buttons