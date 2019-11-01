import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addDig } from '../../actions/digActions';
import { getKit } from '../../actions/kitActions';
import M from 'materialize-css/dist/js/materialize.min.js'
import theme from '../layout/Theme';

const DigForm = ({ kitId, digPadStart, digPadEnd, memorySubmit, addDig, getKit, userId, nightMode }) => {
    const [name, setName] = useState('')

    let kit_id = kitId
    let user_id = userId
    let dig_pad_start = digPadStart
    let dig_pad_end = digPadEnd

    const onSubmit = () => {
        if(name === '' ){
            M.toast({ html: 'Please write something about this region' })
        } else {
            const newDig = {
                kit_id,
                user_id,
                name,
                dig_pad_start,
                dig_pad_end,
            }
            addDig(newDig)
            .then(()=> getKit(`kits/${kitId}`))
            M.toast({ html: 'Region Saved'})
        }
        setName('')
        memorySubmit()
    }

    return (
        <>
            <div className="input-field col s6">
            <i className="material-icons prefix">mode_edit</i>
            <input 
            id="icon_prefix2" 
            className="materialize-input"
            style={nightMode ? theme.dmUtility : theme.lmAccentTwo}
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

export default connect(null, { addDig, getKit })(DigForm)
