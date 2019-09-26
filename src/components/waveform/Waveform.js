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
            notes: [],
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

        this.wavesurfer.load(this.props.src);
        console.log('Waveform Props:', this.props)
        this.setState({ playing: this.wavesurfer.isPlaying() })
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

    //////////////////////////

    // Region Controls /////
    onAddRegionOne = () => {
        this.wavesurfer.addRegion(regionsObj[0])
    }
    onRemoveRegionOne = () => {
        let region = this.wavesurfer.regions.list.pad1
        region.remove()
    }

    onAddRegionTwo = () => {
        this.wavesurfer.addRegion(regionsObj[1])
    }
    onRemoveRegionTwo = () => {
        let region = this.wavesurfer.regions.list.pad2
        region.remove()
    }

    onAddRegionThree = () => {
        this.wavesurfer.addRegion(regionsObj[2])
    }
    onRemoveRegionThree = () => {
        let region = this.wavesurfer.regions.list.pad3
        region.remove()
    }

    onAddRegionFour = () => {
        this.wavesurfer.addRegion(regionsObj[3])
    }
    onRemoveRegionFour = () => {
        let region = this.wavesurfer.regions.list.pad4
        region.remove()
    }

    onAddRegionFive = () => {
        this.wavesurfer.addRegion(regionsObj[4])
    }
    onRemoveRegionFive = () => {
        let region = this.wavesurfer.regions.list.pad5
        region.remove()
    }

    onAddMemoryRegion = () => {
        this.wavesurfer.addRegion(regionsObj[5])
    }
    onRemoveMemoryRegion = () => {
        let region = this.wavesurfer.regions.list.pad6
        region.remove()
    }

    onAddNoteRegion = () => {
        this.wavesurfer.addRegion(regionsObj[6])
    }
    onRemoveNoteRegion = () => {
        let region = this.wavesurfer.regions.list.pad7
        region.remove()
    }

    clearRegions = () => {
        this.wavesurfer.clearRegions()
    }

    triggerOne = () => {
        this.wavesurfer.stop()
        let clip = this.wavesurfer.regions.list.pad1;
        clip.play()
    }

    triggerTwo = () => {
        this.wavesurfer.stop()
        let clip = this.wavesurfer.regions.list.pad2;
        clip.play()
    }
    
    triggerThree = () => {
        this.wavesurfer.stop()
        let clip = this.wavesurfer.regions.list.pad3;
        clip.play()
    }

    triggerFour = () => {
        this.wavesurfer.stop()
        let clip = this.wavesurfer.regions.list.pad4;
        clip.play()
    }

    triggerFive = () => {
        this.wavesurfer.stop()
        let clip = this.wavesurfer.regions.list.pad5;
        clip.play()
    }

    triggerMemory = () => {
        this.wavesurfer.stop()
        let clip = this.wavesurfer.regions.list.pad6;
        clip.play()
    }

    triggerNote = () => {
        this.wavesurfer.stop()
        let clip = this.wavesurfer.regions.list.pad7;
        clip.play()
    }

    notesMode = (val1, val2) => {
        let waveNotes = this.props.notes
        console.log(waveNotes)
        this.wavesurfer.addRegion({
            id: 'testPad',
            start: `${val1}`,
            end: `${val2}`,
            loop: false,
            drag: false,
            resize: false,
            color: 'rgb(255, 176, 176, 0.4)',
            attributes: {
                label: "[1]"
            }
        })
    }

    ///// Region Controls //

    render() {
        return (
            <div className='waveform'>
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
            removeRegionOne={this.onRemoveRegionOne} 
            addRegionTwo={this.onAddRegionTwo} 
            removeRegionTwo={this.onRemoveRegionTwo}
            addRegionThree={this.onAddRegionThree} 
            removeRegionThree={this.onRemoveRegionThree}
            addRegionFour={this.onAddRegionFour}
            removeRegionFour={this.onRemoveRegionFour} 
            addRegionFive={this.onAddRegionFive} 
            removeRegionFive={this.onRemoveRegionFive}
            addMemoryRegion={this.onAddMemoryRegion} 
            removeMemoryRegion={this.onRemoveMemoryRegion}
            addNoteRegion={this.onAddNoteRegion} 
            removeNoteRegion={this.onRemoveNoteRegion}
            clearRegions={this.clearRegions}
            triggerOne={this.triggerOne} 
            triggerTwo={this.triggerTwo} 
            triggerThree={this.triggerThree} 
            triggerFour={this.triggerFour} 
            triggerFive={this.triggerFive} 
            triggerMemory={this.triggerMemory} 
            triggerNote={this.triggerNote} 
            notesMode={this.notesMode}
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
