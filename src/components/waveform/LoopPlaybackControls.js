import React from 'react'
import theme from '../layout/Theme';

export const LoopPlaybackControls = ({ 
  nightMode,
  loadBuffer,
  playLooped,
  stopLoop,
  clearBuffer
}) => {

  return (
    <div className="loop-playback-controls" style={nightMode ? theme.dmAccent : theme.lmAccentTwo}>
      <i onClick={loadBuffer} className='small material-icons'>input </i>
      <i onClick={playLooped} className='small material-icons'>play_arrow </i>
      <i onClick={stopLoop} className={'small material-icons'}>stop </i>
      <i onClick={clearBuffer} className={'small material-icons'}>clear </i>
    </div>
  )
}
