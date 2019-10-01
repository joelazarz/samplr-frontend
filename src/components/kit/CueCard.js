import React from 'react'
import theme from '../layout/Theme';

const CueCard = ({ dig, removeHandler, nightMode }) => {

    return (
        <>
        <div className="notecard" style={nightMode ? theme.dmSecondary : theme.lmGrey}>
            <span>{dig.name}</span>
            <i onClick={() => removeHandler(dig)} className="cueremove material-icons">remove_circle_outline</i>
        </div>
        </>
    )
}

export default CueCard
