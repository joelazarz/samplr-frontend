import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'
import RegionsPlugin from 'wavesurfer.js/src/plugin/regions.js'
import { LoopPlaybackControls } from './LoopPlaybackControls';
import theme from '../layout/Theme';

export class LoopStation extends Component {

  state = {
    loopPlaying: false
  }

  componentDidMount() {

    this.el = ReactDOM.findDOMNode(this)
    this.waveform = this.el.querySelector('.loop-wave')
    this.wavesurfer = WaveSurfer.create({
        container: this.waveform,
        waveColor: 'rgb(193, 193, 193)',
        height: 115,
        progressColor: 'rgb(140, 140, 140)',
        cursorColor: 'orange',
        cursorWidth: 2,
        hideScrollbar: false,
        autoCenter: false,
        scrollParent: true,
        plugins: [
          RegionsPlugin.create()
        ]
    });
    this.wavesurfer.on('finish', () => this.playLooped());
    this.wavesurfer.on('play', () => this.setState({loopPlaying: true}));
  };

  componentWillUnmount(){
    this.wavesurfer.empty();
    this.wavesurfer.destroy();
    this.wavesurfer.cancelAjax();
  };
  
  playLooped = () => {
    this.wavesurfer.play();
  };

  stopLoop = () => {
    this.wavesurfer.stop();
    this.setState({loopPlaying: false})
  };
  
  loadBuffer = () => {
    if (this.props.concatenatedBuffers === null) {return;};
    this.wavesurfer.stop()
    this.wavesurfer.loadDecodedBuffer(this.props.concatenatedBuffers);
  };

  clearBuffer = () => {
    this.wavesurfer.empty();
    this.props.clearLoop();
    this.setState({loopPlaying: false})
  };

  changeSpeed = (speed) => {
    this.wavesurfer.setPlaybackRate(speed);
  };

  render() {
    return (
      <div className="loop-station">
        <LoopPlaybackControls 
        nightMode={this.props.nightMode}
        loadBuffer={this.loadBuffer}
        playLooped={this.playLooped}
        stopLoop={this.stopLoop}
        clearBuffer={this.clearBuffer}
        changeSpeed={this.changeSpeed}
        loopPlaying={this.state.loopPlaying}
        /> 
        <div className="loop-wave" style={this.props.nightMode ? theme.dmSecondary : theme.lmWave} >
          <div id="loop-waveform"></div>
        </div>
      </div>
    )
  };
};

export default LoopStation;
