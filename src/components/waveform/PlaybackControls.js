import React, { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types';

const PlaybackControls = ({ 
    playControl, 
    playPauseControl, 
    stopControl,
    skipBackward,
    skipForward,
    slowedSpeed,
    normalSpeed,
    speedDown,
    speedUp,
    mute }) => {

    useEffect(()=>{
        window.addEventListener('keydown', handleKey);
    })

    const [playStatus, setPlayStatus] = useState(false)
    const [pauseStatus, setPauseStatus] = useState(false)
    const [stopStatus, setStopStatus] = useState(true)
    const [rrStatus, setRRStatus] = useState(false)
    const [ffStatus, setFFStatus] = useState(false)
    const [slowedStatus, setSlowedStatus] = useState(false)
    const [muteStatus, setMuteStatus] = useState(false)

    const playEnable = () => {
        playControl();
        setPlayStatus(true);
        setPauseStatus(false);
        setStopStatus(false);
    }

    const stopEnable = () => {
        stopControl();
        setPlayStatus(false);
        setPauseStatus(false);
        setStopStatus(true);
    }

    const PauseEnable = () => {
        playPauseControl();
        setPauseStatus(true)
        setPlayStatus(false);
        setStopStatus(false);
    }

    const PauseDisable = () => {
        playPauseControl();
        setPauseStatus(false)
        setPlayStatus(true);
        setStopStatus(false);
    }

    const skipBack = () => {
        skipBackward();
        setRRStatus(true)
        setTimeout(()=>{
            setRRStatus(false)
        }, 100)
    }

    const skipAhead = () => {
        skipForward();
        setFFStatus(true)
        setTimeout(()=>{
            setFFStatus(false)
        }, 100)
    }

    const slowedEnable = () => {
        slowedSpeed();
        setSlowedStatus(true)
    }

    const slowedDisable = () => {
        normalSpeed();
        setSlowedStatus(false)
    }

    const pitchDown = () => {
        speedDown();
        setSlowedStatus(true)
    }

    const pitchUp = () => {
        speedUp();
        setSlowedStatus(true)
    }

    const toggleMute = () => {
        mute()
        setMuteStatus(!!!muteStatus)
    }

    const handleKey = (e) => {
        e.stopPropagation()
        if(e.keyCode === 65){
            playEnable()
        } else if (e.keyCode === 83){
            stopEnable()
        } else if (e.keyCode === 188){
            pitchDown()
        } else if (e.keyCode === 190){
            slowedDisable()
        } else if (e.keyCode === 191){
            pitchUp()
        } else if (e.keyCode === 192){
            toggleMute()
        } else if (e.keyCode === 37){
            skipBack()
        } else if (e.keyCode === 39){
            skipAhead()
        } 
    }

    return (
        <div className="playback-controls">
            <i onClick={playEnable} className={'medium material-icons play' + (playStatus ? ' true' : ' false')}>play_arrow </i>
            <i onClick={(pauseStatus ? PauseDisable : PauseEnable)} className={'medium material-icons pause' + (pauseStatus ? ' true' : ' false')}>pause </i>
            <i onClick={stopEnable} className={'medium material-icons stop' + (stopStatus ? ' true' : ' false')}>stop </i>
            <i onClick={skipBack} className={'medium material-icons rr' + (rrStatus ? ' true' : ' false')}>fast_rewind </i>
            <i onClick={skipAhead} className={'medium material-icons ff' + (ffStatus ? ' true' : ' false')}>fast_forward </i>
            <i onClick={(slowedStatus ? slowedDisable : slowedEnable)} className={'medium material-icons speed' + (slowedStatus ? ' true' : ' false')}>slow_motion_video </i>
            <i onClick={toggleMute} className={'medium material-icons mute' + (muteStatus ? ' true' : ' false')}>volume_off </i>
        </div>
    )

}

PlaybackControls.propTypes = {
    playControl: PropTypes.func.isRequired,
    playPauseControl: PropTypes.func.isRequired,
    stopControl: PropTypes.func.isRequired,
    skipBackward: PropTypes.func.isRequired,
    skipForward: PropTypes.func.isRequired,
    slowedSpeed: PropTypes.func.isRequired,
    normalSpeed: PropTypes.func.isRequired,
    speedDown: PropTypes.func.isRequired,
    speedUp: PropTypes.func.isRequired,
    mute: PropTypes.func.isRequired
}

export default PlaybackControls
