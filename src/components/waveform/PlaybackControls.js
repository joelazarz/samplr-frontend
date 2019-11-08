import React, { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types';
import { Knob } from 'react-rotary-knob'
import * as skins from 'react-rotary-knob-skin-pack'
import theme from '../layout/Theme';

const PlaybackControls = ({ 
    playControl, 
    playPauseControl, 
    stopControl,
    skipBackward,
    skipForward,
    mute,
    nightMode,
    changeSpeed,
    changeZoom }) => {

    useEffect(()=>{
        window.addEventListener('keydown', handlePlaybackKey);
    })

    const [playStatus, setPlayStatus] = useState(false)
    const [pauseStatus, setPauseStatus] = useState(false)
    const [stopStatus, setStopStatus] = useState(true)
    const [rrStatus, setRRStatus] = useState(false)
    const [ffStatus, setFFStatus] = useState(false)
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

    const toggleMute = () => {
        setMuteStatus((muteStatus ? false : true))
        mute();
    }

    const changeSpeedValue = (val) => {
        let speed = (val / 100)
        changeSpeed(speed)
    }

    const changeZoomValue = (val) => {
        changeZoom(val)
    }

    const handlePlaybackKey = (e) => {
        e.stopPropagation()
        if(e.ctrlKey && e.keyCode === 65){
            playEnable()
        } else if (e.ctrlKey && e.keyCode === 83){
            stopEnable()
        }
    }

    return (
        <>
        <div className="playback-controls-secondary" style={nightMode ? theme.dmUtility : theme.lmPlayback}>
        </div>

        <div className="playback-controls" style={nightMode ? theme.dmAccent : theme.lmAccentTwo}>
            <i onClick={playEnable} className={'medium material-icons play' + (playStatus ? ' true' : ' false')}>play_arrow </i>
            <i onClick={(pauseStatus ? PauseDisable : PauseEnable)} className={'medium material-icons pause' + (pauseStatus ? ' true' : ' false')}>pause </i>
            <i onClick={stopEnable} className={'medium material-icons stop' + (stopStatus ? ' true' : ' false')}>stop </i>
            <i onClick={skipBack} className={'medium material-icons rr' + (rrStatus ? ' true' : ' false')}>fast_rewind </i>
            <i onClick={skipAhead} className={'medium material-icons ff' + (ffStatus ? ' true' : ' false')}>fast_forward </i>
            <i onClick={toggleMute} className={'medium material-icons mute' + (muteStatus ? ' true' : ' false')}>volume_off </i>
            
            <div className="knob-div">
                <Knob 
                skin={skins.s12}
                unlockDistance={40}
                defaultValue={100}
                min={75}
                max={125}
                rotateDegrees={360}
                onChange={changeSpeedValue.bind(this)}/>
            </div>
            
            <div className="knob-div">
                <Knob 
                skin={skins.s11}
                unlockDistance={40}
                defaultValue={20}
                min={0}
                max={100}
                rotateDegrees={360}
                onChange={changeZoomValue.bind(this)}/>
            </div>
        </div>
        </>
    )

}

PlaybackControls.propTypes = {
    playControl: PropTypes.func.isRequired,
    playPauseControl: PropTypes.func.isRequired,
    stopControl: PropTypes.func.isRequired,
    changeSpeed: PropTypes.func.isRequired,
    changeZoom: PropTypes.func.isRequired,
    mute: PropTypes.func.isRequired
}

export default PlaybackControls
