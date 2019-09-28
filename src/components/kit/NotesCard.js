import React from 'react'

const NotesCard = ({ note }) => {
    return (
        <>
        <div className="notecard grey lighten-2">
            <span className="black-text">{note.note}</span>
        </div>
        </>
    )
}

export default NotesCard
