import axios from 'axios'
import React from 'react'

function Delete({ setDelete, edited, open }) {
    const deletMethod = () => {
        axios.delete(`https://64d3873467b2662bf3dc5f5b.mockapi.io/family/patients/${edited.id}`).then(res=>
              console.log(res) 
        )
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