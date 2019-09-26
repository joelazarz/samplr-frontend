import React, { Component } from 'react'

import WaveSurfer from 'wavesurfer.js'
import RegionsPlugin from 'wavesurfer.js/src/plugin/regions.js'
import regionsObj from './Regions';

import PlaybackControls from '../waveform/PlaybackControls';
import RegionControls from '../waveform/RegionControls';

class Waveform extends Component {

    state = {  
        memoryRegion: null,
        noteRegion: null
    }

    
    componentDidMount() {
        this.wavesurfer = WaveSurfer.create({
            container: '.wave',
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
                    regions: []
                })
            ]
        })
        this.wavesurfer.load(this.props.src);
    }



    // Playback Controls /////
    play = () => {
        this.wavesurfer.play()
    }
    playPause = () => {
        this.wavesurfer.playPause()
    }
    stopBtn = () => {
        console.log(this.state)
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
        this.setState({ noteRegion: regionsObj[6] })
    }
    onRemoveNoteRegion = () => {
        let region = this.wavesurfer.regions.list.pad7
        region.remove()
        this.setState({ noteRegion: null })
    }

    clearRegions = () => {
        this.wavesurfer.clearRegions()
        this.setState({ noteRegion: null, memoryRegion: null })
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

    notesMode = () => {
        let waveNotes = this.props.notes
        waveNotes.map(note => this.wavesurfer.addRegion({
            id: `note-${note.id}`,
            start: `${note.note_pad_start}`,
            end: `${note.note_pad_end}`,
            loop: false,
            drag: false,
            resize: false,
            color: 'rgb(182, 255, 163, 0.4)',
            attributes: {
                label: `${note.id}`
            }
        }))
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


export default Waveform
