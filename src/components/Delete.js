import axios from 'axios'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addUser } from '../redux/UserReducer'

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
        open ? <div className='delete'><h1>გსურთ მონიშნული ჩანაწერის წაშლა?</h1>
            <div className="buttonDelete">
                <button onClick={deletMethod}>Yes</button>
                <button onClick={() => setDelete(false)}>no</button>
            </div>

        </div> : null
    )
}

export default Delete