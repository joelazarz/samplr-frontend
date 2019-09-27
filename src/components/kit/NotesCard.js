import React from 'react'

const NotesCard = ({ note }) => {
    return (
        <>
        <div class="notecard card-panel grey lighten-2">
            <span class="black-text">{note.note}</span>
        </div>
        </>
    )
}

export default NotesCard
