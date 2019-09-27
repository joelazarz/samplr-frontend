import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const DigForm = ({ kitId, digStart, digEnd, memorySubmit }) => {
    const [dig, setDig] = useState('')

    const onSubmit = () => {
        memorySubmit()
        if(dig === '' ){
            M.toast({ html: 'slfllds' })
        } else {
            const newKit = {
                // note,
                // detail,
                // image,
                // sample
            }
            // addKit(newKit)
            M.toast({ html: 'Region Saved'})
        }
        // setName('')
        // setDetail('')
        // setImage('')
        // setSample('')
    }

    return (
        <>
            <div className="input-field col s6">
            <i className="material-icons prefix">mode_edit</i>
            <input id="icon_prefix2" className="materialize-input" placeholder="Set Region Memory..."></input>
            <label htmlFor="icon_prefix2"></label>
            </div>
            <div>
                <a href='#!'
                onClick={onSubmit}
                id='dig-note-submit-btn'
                className='waves-effect black waves-light btn-small'>Submit</a>
            </div>
        </>
    )
}

export default DigForm
