import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const NoteForm = ({ kitId, noteStart, noteEnd, noteSubmit }) => {
    const [note, setNote] = useState('')


    const onSubmit = () => {
        noteSubmit()
        if(note === '' ){
            M.toast({ html: 'Please enter note...' })
        } else {
            const newKit = {
                // note,
                // detail,
                // image,
                // sample
            }
            // addKit(newKit)
            M.toast({ html: 'Kit Added'})
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
            <input id="icon_prefix2" className="materialize-input" placeholder="Leave note..."></input>
            <label htmlFor="icon_prefix2"></label>
            </div>
            <div>
                <a href='#!'
                onClick={onSubmit}
                id='dig-note-submit-btn'
                className='waves-effect black waves-light btn-small'>Leave Note</a>
            </div>
        </>
    )
}

export default NoteForm
