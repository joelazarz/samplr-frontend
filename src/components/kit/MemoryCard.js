import React from 'react'
import theme from '../layout/Theme';

const MemoryCard = ({ dig, clickHandler, nightMode }) => {

    return (
        <>
        <div className="notecard" style={nightMode ? theme.dmSecondary : theme.lmGrey}>
            <span>{dig.name}</span>
            <i onClick={() => clickHandler(dig)} className="cueremove material-icons">add_circle_outline</i>
        </div>
        </>
    )
}

export default MemoryCard
