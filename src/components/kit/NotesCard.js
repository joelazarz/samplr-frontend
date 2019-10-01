import React from 'react'
import theme from '../layout/Theme';

const NotesCard = ({ note, nightMode }) => {
    return (
        <>
        <div className="notecard" style={nightMode ? theme.dmAccent : theme.lmWhite}>
            <span className="black-text">{note.note}</span>
        </div>
        </>
    )
}

export default NotesCard
