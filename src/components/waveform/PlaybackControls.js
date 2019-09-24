import React, { useState } from 'react'

const PlaybackControls = () => {

    const [playClass, setPlayClass] = useState(false)
    const [stopClass, setStopClass] = useState(false)

    return (
        <div className="playback-controls">
            <i onClick={e => setPlayClass(!playClass)} className={`medium material-icons play ${playClass}`}>play_arrow </i>
            <i className="medium material-icons">pause </i>
            <i onClick={e => setStopClass(!stopClass)} className={`medium material-icons stop ${stopClass}`}>stop </i>
            <i className="medium material-icons">fast_rewind </i>
            <i className="medium material-icons">fast_forward </i>
        </div>
    )

}

export default PlaybackControls
