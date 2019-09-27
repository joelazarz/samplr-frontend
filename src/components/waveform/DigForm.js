import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addDig } from '../../actions/digActions';
import M from 'materialize-css/dist/js/materialize.min.js'

const DigForm = ({ kitId, digPadStart, digPadEnd, memorySubmit, addDig }) => {
    const [name, setName] = useState('')
    const [userId, setUserId] = useState(1)

    let kit_id = kitId
    let user_id = userId
    let dig_pad_start = digPadStart
    let dig_pad_end = digPadEnd

    const onSubmit = () => {
        if(name === '' ){
            M.toast({ html: 'slfllds' })
        } else {
            const newDig = {
                kit_id,
                user_id,
                name,
                dig_pad_start,
                dig_pad_end,
            }
            console.log(newDig)
            addDig(newDig)
            M.toast({ html: 'Region Saved'})
        }
        setName('')
        setUserId(1)
        memorySubmit()
    }

    return (
        <>
            <div className="input-field col s6">
            <i className="material-icons prefix">mode_edit</i>
            <input 
            id="icon_prefix2" 
            className="materialize-input"
            onChange={e => setName(e.target.value)} 
            placeholder="Set Region Memory..."></input>
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

export default connect(null, { addDig })(DigForm)
