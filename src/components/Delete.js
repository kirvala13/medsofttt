import axios from 'axios'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addUser } from '../redux/UserReducer'
import { Modal } from 'antd'

function Delete({ setDelete,open,setch }) {
    const disDate = useSelector((state)=>{
        return state.users.users
    })
    const dispatch = useDispatch();

    const userNew = (data) => {
        dispatch(addUser(data))
    }
    const deletMethod = () => {
        axios.delete(`https://64d3873467b2662bf3dc5f5b.mockapi.io/family/patients/${disDate[0].id}`)
        .then(res=>{
             
              userNew(res.data)
        }               
        ).catch(err=>console.log(err))
      
        setDelete(false)
   
       
    }
    return (
        <Modal open={open} footer={[]}>
            <h1 style={{textAlign:"center"}}>გსურთ წაშლა?</h1>
            <div className="buttonDelete">
                <button onClick={deletMethod}>Yes</button>
                <button onClick={() => setDelete(false)}>no</button>
            </div>

        </Modal>
    )
}

export default Delete