import React, { Component } from 'react'

import WaveSurfer from 'wavesurfer.js'
import RegionsPlugin from 'wavesurfer.js/src/plugin/regions.js'
import regionsObj from './Regions';

import PlaybackControls from '../waveform/PlaybackControls';
import RegionControls from '../waveform/RegionControls';
import NoteForm from './NoteForm';
import DigForm from './DigForm';
import LoopStation from './LoopStation';
import theme from '../layout/Theme';

class Waveform extends Component {

    state = {
        id: this.props.id,
        memoryForm: false,
        noteForm: false,  
        memoryStart: null,
        memoryEnd: null,
        noteStart: null,
        noteEnd: null,
        digs: this.props.digs,
        notes: this.props.notes,
        playbackSpeed: 1,
        bufferArr: [],
        concatenatedBuffers: null
    }

    componentDidMount() {
        this.wavesurfer = WaveSurfer.create({
            container: '.wave',
            waveColor: 'rgb(193, 193, 193)',
            progressColor: '#B8D6DA',
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

    componentWillUnmount(){
        this.wavesurfer.empty()
        this.wavesurfer.destroy()
        this.wavesurfer.cancelAjax()
    }


    //////////////////////////
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

    mute = () => {
        this.wavesurfer.toggleMute((this.wavesurfer.getMute ? false : true))
    }

    skipForward = () => {
        this.wavesurfer.skipForward(5)
    }

    skipBackward = () => {
        this.wavesurfer.skipBackward(5)
    }

    zoomIn = () => {
        this.wavesurfer.zoom(20)
    }

    zoomOut = () => {
        this.wavesurfer.zoom(1)
    }

    // playback speed knob control
    changeSpeed = (speed) => {
        this.wavesurfer.setPlaybackRate(speed)
    }

    // zoom knob control
    changeZoom = (val) => {
        this.wavesurfer.zoom(val)
    }

    ///// Playback Controls //
    //////////////////////////

    /////////////////////////
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
        this.setState({ memoryStart: null, memoryEnd: null })
    }

    onAddNoteRegion = () => {
        this.wavesurfer.addRegion(regionsObj[6])
    }

    onRemoveNoteRegion = () => {
        let region = this.wavesurfer.regions.list.pad7
        region.remove()
        this.setState({ noteStart: null, noteEnd: null })
    }

    clearRegions = () => {
        this.wavesurfer.clearRegions()
        this.setState({ memoryStart: null, memoryEnd: null, noteStart: null, noteEnd: null })
        this.setState({ memoryForm: false, noteForm: false })
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
        this.wavesurfer.zoom(1)
        let waveNotes = this.props.notes
        waveNotes.map(note => this.wavesurfer.addRegion({
            id: `note-${note.id}`,
            start: `${note.note_pad_start}`,
            end: `${note.note_pad_end}`,
            loop: false,
            drag: false,
            data: note.note,
            resize: false,
            color: 'rgb(182, 255, 163, 0.4)'
        }))
        // returning the data that will be displayed - find a place for that on interface
        this.wavesurfer.on('region-in', region => console.log(region.data))
    }

    loadRegionOne = () => {
        let digToLoad = [this.props.digCue[0]];
        digToLoad.map(dig => this.wavesurfer.addRegion({
            id: 'pad1',
            start: `${dig.dig_pad_start}`,
            end: `${dig.dig_pad_end}`,
            loop: false,
            color: 'rgb(252, 206, 195, 0.4)'
        }));
        this.props.shiftDig()
    }

    loadRegionTwo = () => {
        let digToLoad = [this.props.digCue[0]];
        digToLoad.map(dig => this.wavesurfer.addRegion({
            id: 'pad2',
            start: `${dig.dig_pad_start}`,
            end: `${dig.dig_pad_end}`,
            loop: false,
            color: 'rgb(187, 255, 198, 0.4)'
        }))
        this.props.shiftDig()
    }

    loadRegionThree = () => {
        let digToLoad = [this.props.digCue[0]];
        digToLoad.map(dig => this.wavesurfer.addRegion({
            id: 'pad3',
            start: `${dig.dig_pad_start}`,
            end: `${dig.dig_pad_end}`,
            loop: false,
            color: 'rgb(191, 253, 255, 0.4)'
        }))
        this.props.shiftDig()
    }

    loadRegionFour = () => {
        let digToLoad = [this.props.digCue[0]];
        digToLoad.map(dig => this.wavesurfer.addRegion({
            id: 'pad4',
            start: `${dig.dig_pad_start}`,
            end: `${dig.dig_pad_end}`,
            loop: false,
            color: 'rgb(247, 161, 255, 0.4)'
        }))
        this.props.shiftDig()
    }

    loadRegionFive = () => {
        let digToLoad = [this.props.digCue[0]];
        digToLoad.map(dig => this.wavesurfer.addRegion({
            id: 'pad5',
            start: `${dig.dig_pad_start}`,
            end: `${dig.dig_pad_end}`,
            loop: false,
            color: 'rgb(255, 176, 176, 0.4)'
        }))
        this.props.shiftDig()
    }

    onMemorySaveClick = () => {
        let start = this.wavesurfer.regions.list.pad6.start
        let end = this.wavesurfer.regions.list.pad6.end
        this.setState({ memoryStart: start, memoryEnd: end })
        this.setState({ memoryForm: true, noteForm: false })
    }

    onNoteSaveClick = () => {
        let start = this.wavesurfer.regions.list.pad7.start
        let end = this.wavesurfer.regions.list.pad7.end
        this.setState({ noteStart: start, noteEnd: end })
        this.setState({ noteForm: true, memoryForm: false })
    }

    onMemorySubmit = () => {
        this.setState({ memoryForm: false })
    }
    
    onNoteSubmit = () => {
        this.setState({ noteForm: false })
    }
    ///// Region Controls /////
    //////////////////////////

    //////////////////////////
    ///// Loop Station Controls
    copyRegionOne = () => {
        let regionOne = this.wavesurfer.regions.list.pad1;
        this.copyBuffer(regionOne);
    };

    copyRegionTwo = () => {
        let regionTwo = this.wavesurfer.regions.list.pad2;
        this.copyBuffer(regionTwo);
    };

    copyRegionThree = () => {
        let regionThree = this.wavesurfer.regions.list.pad3;
        this.copyBuffer(regionThree);
    };

    copyRegionFour = () => {
        let regionFour = this.wavesurfer.regions.list.pad4;
        this.copyBuffer(regionFour);
    };

    copyRegionFive = () => {
        let regionFive = this.wavesurfer.regions.list.pad5;
        this.copyBuffer(regionFive);
    };

    copyBuffer = (region) => {
        this.wavesurfer.stop();
        var originalBuffer = this.wavesurfer.backend.buffer;
        
        if (region.start === undefined || region.end === undefined) { 
            console.log('padStart or padEnd is undefined');
            return;
        }

        var padStart = region.start;
        var padEnd = region.end;

        var emptySegment = this.wavesurfer.backend.ac.createBuffer(
            originalBuffer.numberOfChannels,
            ((padEnd - padStart) * originalBuffer.sampleRate),
            originalBuffer.sampleRate
        );

        for (var i = 0; i < originalBuffer.numberOfChannels; i++) {
            var channelData = originalBuffer.getChannelData(i);
            var emptySegmentData = emptySegment.getChannelData(i);
            let newBufferData = channelData.subarray((padStart * originalBuffer.sampleRate), (padEnd * originalBuffer.sampleRate));
            if (emptySegmentData.length === newBufferData.length) {
                emptySegmentData.set(newBufferData); // occassionally throws RangeError: Source is too large
            } else {
                let newBufferData = channelData.subarray((padStart * originalBuffer.sampleRate), (padEnd * originalBuffer.sampleRate) - 1);
                emptySegmentData.set(newBufferData); 
            };
        };
        this.setState({bufferArr: [...this.state.bufferArr, emptySegment]}, () => {
            this.concatBuffer()
        });
    };

    concatBuffer = () => {
        let stateBuffers = this.state.bufferArr;
        let ogBuffer = this.wavesurfer.backend.ac;
        let stateBuffersLength = stateBuffers.length;
        let channels = [];
        let totalDuration = 0;

        if (stateBuffersLength === 0) {return;}
    
        for (var a = 0; a < stateBuffersLength; a++) {
            channels.push(stateBuffers[a].numberOfChannels);
            totalDuration += stateBuffers[a].duration;
        };

        let numberOfChannels = channels.reduce(function(a, b) { return Math.min(a, b); });;
        let joinedBuffer = ogBuffer.createBuffer(numberOfChannels, ogBuffer.sampleRate * totalDuration, ogBuffer.sampleRate);

        for (var b = 0; b < numberOfChannels; b++) {
            var newChannelDataSum = 0;
            var channel = joinedBuffer.getChannelData(b);
            var dataIndex = 0;

            for(var c = 0; c < stateBuffersLength; c++) {
                var newChannelData = stateBuffers[c].getChannelData(b);
                if (channel.length >= newChannelData.length + newChannelDataSum) {
                    newChannelDataSum += newChannelData.length;
                    channel.set(newChannelData, dataIndex);
                    dataIndex += newChannelData.length; // position to store the next buffer values
                } else {
                    try {
                        channel.set(newChannelData, dataIndex - 1);
                    } catch (error) {
                        console.log(error); // FIX
                    };
                };
            };
        };
        this.setState({concatenatedBuffers: joinedBuffer});
    };

    clearLoop = () => {
        this.setState({bufferArr: []});
        this.setState({concatenatedBuffers: null});
    };
    
    ///// Loop Station Controls
    //////////////////////////



    render() {
        return (
            <div className='waveform'>
            <PlaybackControls 
            playControl={this.play}
            playPauseControl={this.playPause}
            stopControl={this.stopBtn}
            mute={this.mute}
            skipForward={this.skipForward}
            skipBackward={this.skipBackward}
            nightMode={this.props.nightMode}
            zoomIn={this.zoomIn}
            zoomOut={this.zoomOut}
            changeSpeed={this.changeSpeed}
            changeZoom={this.changeZoom}
            />

            <div className='wave' style={this.props.nightMode ? theme.dmSecondary : theme.lmWave}>
            <div id="waveform" ></div>
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
            memorySaveClick={this.onMemorySaveClick}
            noteSaveClick={this.onNoteSaveClick}
            loadRegionOne={this.loadRegionOne}
            loadRegionTwo={this.loadRegionTwo}
            loadRegionThree={this.loadRegionThree}
            loadRegionFour={this.loadRegionFour}
            loadRegionFive={this.loadRegionFive}

            copyRegionOne={this.copyRegionOne}
            copyRegionTwo={this.copyRegionTwo}
            copyRegionThree={this.copyRegionThree}
            copyRegionFour={this.copyRegionFour}
            copyRegionFive={this.copyRegionOne}

            nightMode={this.props.nightMode}
            />
            
            <div className="color-block" style={this.props.nightMode ? theme.dmUtility : theme.lmColorBlock}>
            {this.state.noteForm ? <NoteForm kitId={this.state.id} userId={this.props.userId} noteStart={this.state.noteStart} noteEnd={this.state.noteEnd} noteSubmit={this.onNoteSubmit} nightMode={this.props.nightMode}/> : <></>}
            {this.state.memoryForm ? <DigForm kitId={this.state.id} userId={this.props.userId} digPadStart={this.state.memoryStart} digPadEnd={this.state.memoryEnd} memorySubmit={this.onMemorySubmit} nightMode={this.props.nightMode}/> : <></>}
            </div>

            <div className="loop-station-container">
            <LoopStation 
            nightMode={this.props.nightMode}
            concatenatedBuffers={this.state.concatenatedBuffers} 
            clearLoop={this.clearLoop} 
            />
            </div>

        </div>
        )
    }

}


export default Waveform