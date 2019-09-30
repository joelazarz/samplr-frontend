import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'


const NewCrateForm = ({ userId }) => {
    const [name, setName] = useState('')

    let user_id = userId
    let kit_id = null

    const onSubmit = (e) => {
        if(name === '' ){
            M.toast({ html: 'Please enter Crate Name' })
        } else {
            // e.preventDefault()
            const newCrate = {
                user_id,
                kit_id,
                name
            }
            console.log(newCrate)
            fetch('/crates', {
                method: 'POST',
                body: JSON.stringify(newCrate),
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                }
            })
            M.toast({ html: 'Crate Added'})
        }
        setName('')
    }

    return (

        <>
        <div className='new-crate-form-header'>
            New Crate
        </div>
            <div className='row'>
            
                    <div className='input-field'>
                        <input 
                        type='text'
                        name='name'
                        id="name-input"
                        value={name}
                        onChange={e => setName(e.target.value)}/>
                        <label htmlFor='message' className='active'>Name</label>
                    </div>

                    <div className='modal-footer'>
                    <button href='#!'
                    onClick={onSubmit}
                    className='modal-close waves-effect black waves-light btn'>Enter
                    </button>
                    </div>
                </div>
        </>
    )
}

export default NewCrateForm
