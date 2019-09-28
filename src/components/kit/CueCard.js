import React from 'react'

const CueCard = ({ dig }) => {
    return (
        <>
        <div  className="notecard yellow lighten-4">
            <span className="black-text">{dig.name}</span>
        </div>
        </>
    )
}

export default CueCard
