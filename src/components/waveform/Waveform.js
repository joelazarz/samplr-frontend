import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'
import RegionsPlugin from 'wavesurfer.js/src/plugin/regions.js'
import regionsObj from './Regions';

import PlaybackControls from '../waveform/PlaybackControls';
import RegionControls from '../waveform/RegionControls';

class Waveform extends Component {

    constructor(props) {
        super(props)

        this.state = {  
            playing: false,
            regions: []
        }

    }

    componentDidMount() {

        this.el = ReactDOM.findDOMNode(this)
        this.waveform = this.el.querySelector('.wave')
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
                RegionsPlugin.create({
                    slop: 8,
                    regions: this.state.regions
                })
            ]
        })
        

        ///////// Key Commands
        const triggerOnBtnOne = () => {
            this.wavesurfer.stop()
            let clip = this.wavesurfer.regions.list.pad1;
            clip.play()
        }

        const triggerOnBtnTwo = () => {
            this.wavesurfer.stop()
            let clip = this.wavesurfer.regions.list.pad2;
            clip.play()
        }
        
        const triggerOnBtnThree = () => {
            this.wavesurfer.stop()
            let clip = this.wavesurfer.regions.list.pad3;
            clip.play()
        }

        const triggerOnBtnFour = () => {
            this.wavesurfer.stop()
            let clip = this.wavesurfer.regions.list.pad4;
            clip.play()
        }

        //////////// Key Handler
        const handleKey = (e) => {
            e.stopPropagation()
            if(e.keyCode === 49){
                triggerOnBtnOne()
            } else if (e.keyCode === 50){
                triggerOnBtnTwo()
            } else if (e.keyCode === 51){
                triggerOnBtnThree()
            } else if (e.keyCode === 52){
                triggerOnBtnFour()
            } 
        }

        this.wavesurfer.load(this.props.src);
        this.setState({ playing: this.wavesurfer.isPlaying() })
        // window.addEventListener('keydown', handleKey);
    }



    // Playback Controls /////
    play = () => {
        this.wavesurfer.play()
    }
    playPause = () => {
        this.wavesurfer.playPause()
    }
    stopBtn = () => {
        this.wavesurfer.stop()
    }
    skipBackward = () => {
        this.wavesurfer.skipBackward(3)
    }
    skipForward = () => {
        this.wavesurfer.skipForward(3)
    }
    slowedSpeed = () => {
        this.wavesurfer.setPlaybackRate(0.75)
    }
    normalSpeed = () => {
        this.wavesurfer.setPlaybackRate(1)
    }
    speedDown = () => {
        this.wavesurfer.setPlaybackRate((this.wavesurfer.getPlaybackRate(this.wavesurfer)) - 0.001)
    }
    speedUp = () => {
        this.wavesurfer.setPlaybackRate((this.wavesurfer.getPlaybackRate(this.wavesurfer)) + 0.001)
    }
    mute = () => {
        this.wavesurfer.toggleMute()
    }
    ///// Playback Controls //

    // Region Controls /////
    onAddRegionOne = () => {
        this.wavesurfer.addRegion(regionsObj[0])
    }
    onAddRegionTwo = () => {
        this.wavesurfer.addRegion(regionsObj[1])
    }
    onAddRegionThree = () => {
        this.wavesurfer.addRegion(regionsObj[2])
    }
    onAddRegionFour = () => {
        this.wavesurfer.addRegion(regionsObj[3])
    }
    onAddRegionFive = () => {
        this.wavesurfer.addRegion(regionsObj[4])
    }
    onAddMemoryRegion = () => {
        this.wavesurfer.addRegion(regionsObj[5])
    }
    onAddNoteRegion = () => {
        this.wavesurfer.addRegion(regionsObj[6])
    }
    clearRegions = () => {
        this.wavesurfer.clearRegions()
    }
    ///// Region Controls //

    render() {
        return (
            <div className='waveform' onClick={this.handleSKey}>
            <PlaybackControls 
            playControl={this.play}
            playPauseControl={this.playPause}
            stopControl={this.stopBtn}
            skipBackward={this.skipBackward}
            skipForward={this.skipForward}
            slowedSpeed={this.slowedSpeed}
            normalSpeed={this.normalSpeed}
            speedDown={this.speedDown}
            speedUp={this.speedUp}
            mute={this.mute}
            />
            <div className='wave'>
            <div id="waveform"></div>
            <div id="wave-timeline"></div>
            </div>
            <RegionControls 
            addRegionOne={this.onAddRegionOne} 
            addRegionTwo={this.onAddRegionTwo} 
            addRegionThree={this.onAddRegionThree} 
            addRegionFour={this.onAddRegionFour} 
            addRegionFive={this.onAddRegionFive} 
            addMemoryRegion={this.onAddMemoryRegion} 
            addNoteRegion={this.onAddNoteRegion} 
            clearRegions={this.clearRegions} 
            />
            <div className="color-block">
            </div>

        </div>
        )
    }

}

Waveform.defaultProps = {
    src: ""
}

export default Waveform
