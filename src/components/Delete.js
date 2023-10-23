import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'

function Delete({ setDelete,open,setch }) {
    const disDate = useSelector((state)=>{
        return state.users.users
    })
    const deletMethod = () => {
        axios.delete(`https://64d3873467b2662bf3dc5f5b.mockapi.io/family/patients/${disDate.id}`).then(res=>
              console.log(res) 
        ).catch(err=>console.log(err))
        setDelete(false)
        setch(-1)
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