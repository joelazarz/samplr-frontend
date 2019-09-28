import React from 'react'

const MemoryCard = ({ dig, clickHandler }) => {

    
    return (
        <>
        <div onClick={() => clickHandler(dig)} className="notecard grey lighten-1">
            <span className="black-text">{dig.name}</span>
        </div>
        </>
    )
}

export default MemoryCard
