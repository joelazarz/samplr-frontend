import React from 'react'

const CueCard = ({ dig, removeHandler }) => {

    return (
        <>
        <div  className="notecard yellow lighten-4">
            <span className="black-text">{dig.name}</span>
            <i onClick={() => removeHandler(dig)} className="cueremove material-icons">remove_circle_outline</i>
        </div>
        </>
    )
}

export default CueCard
