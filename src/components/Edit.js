import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Validation from '../hooks/Validation';
function Edit({ open, edited, setEdit }) {

    const [errors, setErrors] = useState({})
   
    const [rame, setRame] = useState({
        FullName: "",
        BDATE: "",
        Gender: "",
        Phone: "",
        Address: ""
    })

    const { FullName, BDATE, Gender, Phone, Address } = rame;
    const obj = { FullName, BDATE, Gender, Phone, Address }
    const upMethod = () => {
        axios.put(`http://localhost:3001/patients/${edited.id}`, obj).then(res =>
            console.log(res.data)
        )
        setEdit(false)
        // window.location.reload();
    }
 
    const change = (e) => {
        const clone = { ...rame }
        clone[e.target.name] = e.target.value;
        setRame(clone)
    }
    const hds = () => {
        setRame({
            ...rame,
            "BDATE": edited.BDATE,
            "FullName": edited.FullName,
            "Gender": edited.Gender,
            "Phone": edited.Phone,
            "Address": edited.Address,
        })
    }
    useEffect(() => {
        const tm = setTimeout(() => {

            setErrors(Validation(rame))
        }, 500)
    }, [rame])

  useEffect(()=>{
      if (!edited) {
        console.log("nun");
    } else {
       hds()
    }
    
  },[edited])




    return (
        open ? (
            <>
                <div className='pop'>

                    <form onSubmit={upMethod}>
                        <div className="inputs">
                            <label for="name">სახელი გვარი</label>
                            <input type="text" name='FullName' placeholder='სახელი გვარი' onChange={change} value={rame.FullName} required />
                           {errors.name && <h6 className='err'>{errors.name}</h6>}
                        </div>
                        <div className="inputs">
                            <label for="date">დაბ თარიღი</label>
                            <input type="date" name='BDATE' value={BDATE} onChange={change} />
                            {errors.date && <h6 className='err'>{errors.date}</h6>}
                        </div>
                        <div className="inputs">
                            <label for="Gender">სქესი</label>
                            <select  name="Gender" value={Gender} onChange={change}>
                               
                                <option  value="მამრობით">მამრობითი</option>
                                <option  value="მდედრობითი">მდედრობითი</option>
                            </select>
                            {errors.Gender && <h6 className='err'>{errors.Gender}</h6>}
                        </div>
                        <div className="inputs">
                            <label for="number">მობ ნომერი</label>
                            <input type="number" name='Phone' onChange={change} placeholder='59x-xxx-xxx' value={Phone} />
                            {errors.Phone && <h6 className='err'>{errors.Phone}</h6>}
                        </div>
                        <div className="inputs">
                            <label for="adress">მისამართი</label>
                            <div className="inputs">
                                <select name="Address" value={Address} onChange={change}>
                                  
                                    <option value="თელავი">თელავი</option>
                                    <option value="თბილისი">თბილისი</option>
                                    <option value="გორი">გორი</option>
                                    <option value="ბათუმი">ბათუმი</option>
                                    {errors.Address && <h6 className='err'>{errors.Address}</h6>}
                                </select>
                            </div>
                        </div>
                    </form>
                    <div style={{ display: 'flex', gap: "5px" }}>
                        <button disabled={Object.keys(errors).length}  className='btn' onClick={upMethod}>Update</button>
                        <button className='btn' onClick={() => setEdit(false)}>Cancel</button>
                    </div>
                </div>
            </>
        ) : null
    )
}

export default Edit
