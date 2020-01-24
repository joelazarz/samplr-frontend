import React from 'react'
import theme from '../layout/Theme';
import { Knob } from 'react-rotary-knob'
import * as skins from 'react-rotary-knob-skin-pack'

export const LoopPlaybackControls = ({ 
  nightMode,
  loadBuffer,
  playLooped,
  stopLoop,
  clearBuffer,
  changeSpeed,
  loopPlaying
}) => {

  const changeSpeedValue = (val) => {
    let speed = (val / 100)
    changeSpeed(speed)
  }

  return (
    <div className="loop-playback-controls" style={nightMode ? theme.dmAccent : theme.lmAccentTwo}>
      <i onClick={loadBuffer} className='small material-icons'>input </i>
      <i onClick={playLooped} style={loopPlaying ? {color: 'rgb(0, 168, 14)'} : {color:'lightgrey'}} className='small material-icons'>play_arrow </i>
      <i onClick={stopLoop} style={loopPlaying ? {color: 'lightgrey'} : {color:'rgb(211, 0, 0)'}} className='small material-icons'>stop </i>
      <i onClick={clearBuffer} className={'small material-icons'}>clear </i>
      <div className="loop-knob-div">
        <Knob 
        skin={skins.s12}
        unlockDistance={40}
        defaultValue={100}
        min={75}
        max={125}
        rotateDegrees={360}
        onChange={changeSpeedValue.bind(this)}/>
      </div>
    </div>
  )
}
