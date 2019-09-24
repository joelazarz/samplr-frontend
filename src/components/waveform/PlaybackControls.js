import React, { useState } from 'react'

const PlaybackControls = ({ 
    playControl, 
    playPauseControl, 
    stopControl, 
    slowedSpeed,
    normalSpeed }) => {

    const [playStatus, setPlayStatus] = useState(false)
    const [slowedStatus, setSlowedStatus] = useState(false)

    const playEnable = () => {
        playControl();
        setPlayStatus(true);
    }

    const stopEnable = () => {
        stopControl();
        setPlayStatus(false);
    }

    const slowedEnable = () => {
        slowedSpeed();
        setSlowedStatus(true)
    }

    const slowedDisable = () => {
        normalSpeed();
        setSlowedStatus(false)
    }

    return (
        <div className="playback-controls">
            <i onClick={playEnable} className={'medium material-icons play' + (playStatus ? ' true' : ' false')}>play_arrow </i>
            <i onClick={playPauseControl} className="medium material-icons">pause </i>
            <i onClick={stopEnable} className={'medium material-icons stop' + (playStatus ? ' false' : ' true')}>stop </i>
            <i className="medium material-icons">fast_rewind </i>
            <i className="medium material-icons">fast_forward </i>
            <i onClick={(slowedStatus ? slowedDisable : slowedEnable)} className={'medium material-icons speed' + (slowedStatus ? ' true' : ' false')}>slow_motion_video </i>
        </div>
    )

}

export default PlaybackControls
