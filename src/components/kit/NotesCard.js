import React from 'react'

const NotesCard = ({ note }) => {
    return (
        <>
        <div class="notecard card-panel blue-grey lighten-4">
            <span class="black-text">{note.note}</span>
        </div>
        </>
    )
}

export default NotesCard
