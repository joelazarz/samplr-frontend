import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'
import RegionsPlugin from 'wavesurfer.js/src/plugin/regions.js'
import theme from '../layout/Theme';

export class LoopStation extends Component {

  componentDidMount() {

    this.el = ReactDOM.findDOMNode(this)
    this.waveform = this.el.querySelector('.loop-wave')
    this.wavesurfer = WaveSurfer.create({
        container: this.waveform,
        waveColor: 'rgb(193, 193, 193)',
        progressColor: 'rgb(140, 140, 140)',
        cursorColor: 'orange',
        cursorWidth: 2,
        hideScrollbar: false,
        autoCenter: false,
        scrollParent: true,
        plugins: [
          RegionsPlugin.create()
        ]
    })
    this.wavesurfer.on('finish', () => this.playLooped());
  }
  
  playLooped = () => {
    this.wavesurfer.play();
  };

  stopLoop = () => {
    this.wavesurfer.stop();
  };
  
  loadBuffer = () => {
    if (this.props.concatenatedBuffers === null) {return;};
    this.wavesurfer.loadDecodedBuffer(this.props.concatenatedBuffers);
  };

  clearBuffer = () => {
    this.wavesurfer.empty();
    this.props.clearLoop();
  };



  render() {
    return (
      <div className="loop-station">
        <button onClick={this.loadBuffer}>Load Buffer</button>
        <button onClick={this.playLooped}>Play Loop</button>
        <button onClick={this.stopLoop}>Stop Loop</button>
        <button onClick={this.clearBuffer}>Clear Loop</button>
        <div className="loop-wave" style={this.props.nightMode ? theme.dmSecondary : theme.lmWave} >
          <div id="loop-waveform"></div>
        </div>
      </div>
    )
  };
};

export default LoopStation;
