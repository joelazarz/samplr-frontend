import React from 'react'

const MemoryCard = ({ dig, clickHandler }) => {

    
    return (
        <>
        <div className="notecard grey lighten-1">
            <span className="black-text">{dig.name}</span>
            <i onClick={() => clickHandler(dig)} className="cueremove material-icons">add_circle_outline</i>
        </div>
        </>
    )
}

export default MemoryCard
