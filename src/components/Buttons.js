import React, { useState } from 'react'
import delet from "../assets/clear.png";
import edit from "../assets/edit.png";
import add from "../assets/plus.png";
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';
import { Button } from 'antd';
function Buttons({ edited,pend,check }) {
    const [popup, setPopup] = useState(false);
    const [eedit, setEdit] = useState(false);
    const [deletePat, setDelete] = useState(false);
   
    return (
        <div className='button'>
            <Add open={popup} setPopup={setPopup} />
            <Button type='primary' onClick={() => setPopup(true)}> <img src={add} alt='add' /> დამატება </Button>
            <Button type="dashed" onClick={() => setEdit(true)} disabled={check===-1} > <img src={edit} alt='add'  /> რედაქტირება </Button>
            <Edit open={eedit} edited={edited} setEdit={setEdit} pend={pend} />
            <Button type="primary" danger onClick={() => setDelete(true)} disabled={check===-1}><img src={delet} alt='add' /> წაშლა </Button>
            <Delete open={deletePat} edited={edited} setDelete={setDelete} />
        </div>
    )
}

export default Buttons