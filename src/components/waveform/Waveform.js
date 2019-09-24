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

        const play = () => {
            this.wavesurfer.play()
            console.log(this.wavesurfer.isPlaying())
        }

        const mute = () => {
            this.wavesurfer.toggleMute()
        }

        const stop = () => {
            this.wavesurfer.stop()
            console.log(this.wavesurfer.isPlaying())
            // console.log('REGIONSOBJ:',regionsObj[0])
            // console.log('THIS.WAVESURFER:', this.wavesurfer)
            // console.log('PAD1:',this.wavesurfer.regions.list.pad1)
            // console.log('PAD2:',this.wavesurfer.regions.list.pad2)
            // console.log('PAD3:',this.wavesurfer.regions.list.pad3)
            // console.log('PAD4 START:',this.wavesurfer.regions.list.pad4.start)
            // console.log('PAD4 END:',this.wavesurfer.regions.list.pad4.end)
            // console.log('GETPLAYBACKSPEED:', this.wavesurfer.getPlaybackRate(this.wavesurfer))
        }

        const slowed = () => {
            this.wavesurfer.setPlaybackRate((this.wavesurfer.getPlaybackRate(this.wavesurfer)) - 0.01)
        }

        const ogSpeed = () => {
            this.wavesurfer.setPlaybackRate(1)
        }

        const fast = () => {
            this.wavesurfer.setPlaybackRate((this.wavesurfer.getPlaybackRate(this.wavesurfer)) + 0.01)
        }

        const skipForward = () => {
            this.wavesurfer.skipForward(5)
        }

        const skipBackward = () => {
            this.wavesurfer.skipBackward(5)
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
            } else if (e.keyCode === 83){
                stop()
            } else if (e.keyCode === 65){
                play()
            } else if (e.keyCode === 188){
                slowed()
            } else if (e.keyCode === 190){
                ogSpeed()
            } else if (e.keyCode === 191){
                fast()
            } else if (e.keyCode === 39){
                skipForward()
            } else if (e.keyCode === 37){
                skipBackward()
            } else if (e.keyCode === 192){
                mute()
            } 
        }

        this.wavesurfer.load(this.props.src);
        this.setState({ playing: this.wavesurfer.isPlaying() })
        window.addEventListener('keydown', handleKey);
    }

    normalSpeed = () => {
        this.wavesurfer.setPlaybackRate(1)
    }
    // onSaveBtn = () => {
    //     console.log('PAD4 START:',this.wavesurfer.regions.list.pad4.start)
    //     console.log('PAD4 END:',this.wavesurfer.regions.list.pad4.end)
    // }


    // this sets the start and end time correctly but the color range does not move 
    // onCallBtn = () => {
    //     this.wavesurfer.regions.list.pad4.start = 5;
    //     this.wavesurfer.regions.list.pad4.end = 6;
    // }

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
    slowedSpeed = () => {
        this.wavesurfer.setPlaybackRate(0.75)
    }
    normalSpeed = () => {
        this.wavesurfer.setPlaybackRate(1)
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
            slowedSpeed={this.slowedSpeed}
            normalSpeed={this.normalSpeed}
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
