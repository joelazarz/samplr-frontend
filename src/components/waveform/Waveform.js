import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'
import RegionsPlugin from 'wavesurfer.js/src/plugin/regions.js'
import regionsObj from './Regions';

class Waveform extends Component {

    constructor(props) {
        super(props)
        this.state = {  
            data: null,
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
        }

        const mute = () => {
            this.wavesurfer.toggleMute()
        }

        const stop = () => {
            this.wavesurfer.stop()
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
        this.setState({ data: this.wavesurfer })
        window.addEventListener('keydown', handleKey);
    }


    playPause = () => {
        this.wavesurfer.playPause()
    }

    slowedSpeed = () => {
        this.wavesurfer.setPlaybackRate(0.75)
    }

    normalSpeed = () => {
        this.wavesurfer.setPlaybackRate(1)
    }

    stopBtn = () => {
        this.wavesurfer.stop()
    }

    // onZoomIn = () => {
    //     this.wavesurfer.zoom(Number(50))
    // }

    // onZoomOut = () => {
    //     this.wavesurfer.zoom(Number(0))
    // }

    // onSaveBtn = () => {
    //     console.log('PAD4 START:',this.wavesurfer.regions.list.pad4.start)
    //     console.log('PAD4 END:',this.wavesurfer.regions.list.pad4.end)
    // }


    // this sets the start and end time correctly but the color range does not move 
    // onCallBtn = () => {
    //     this.wavesurfer.regions.list.pad4.start = 5;
    //     this.wavesurfer.regions.list.pad4.end = 6;
    // }

    onAddRegion = () => {
        this.wavesurfer.addRegion(regionsObj[3])
    }

    render() {
        console.log('THIS.STATE:', this.state)
        return (
            <div className='waveform' onClick={this.handleSKey}>
            <div className='wave'>
            <div id="waveform"></div>
            <div id="wave-timeline"></div>
            <button onClick={this.playPause}>Play/Pause</button>
            <button onClick={this.slowedSpeed}>0.75</button>
            <button onClick={this.normalSpeed}>norm</button>
            <button onClick={this.stopBtn}>stop</button>
            <button onClick={this.onCallBtn}>CALL PARAMS</button>
            <button onClick={this.onAddRegion}>ADD REGION</button>
            </div>

        </div>
        )
    }

}

Waveform.defaultProps = {
    src: ""
}

export default Waveform
