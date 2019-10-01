import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addNote } from '../../actions/noteActions';
import M from 'materialize-css/dist/js/materialize.min.js'
import theme from '../layout/Theme';

const NoteForm = ({ kitId, noteStart, noteEnd, noteSubmit, addNote, userId, nightMode }) => {
    const [note, setNote] = useState('')

    let kit_id = kitId
    let note_pad_start = noteStart
    let note_pad_end = noteEnd
    let user_id = userId


    const onSubmit = () => {
        noteSubmit()
        if(note === '' ){
            M.toast({ html: 'Please enter note...' })
        } else {
            const newNote = {
                kit_id,
                user_id,
                note,
                note_pad_start,
                note_pad_end
            }
            addNote(newNote)
            M.toast({ html: 'Note Added'})
        }
        setNote('')
    }


    return (
        <>
            <div className="input-field col s6">
            <i className="material-icons prefix">mode_edit</i>
            <input 
            id="icon_prefix2" 
            className="materialize-input" 
            style={nightMode ? theme.dmUtility : theme.lmAccentTwo}
            onChange={e => setNote(e.target.value)}
            placeholder="Leave note..."></input>
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

export default connect(null, { addNote })(NoteForm)
