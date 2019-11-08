import React from 'react'
import theme from './Theme';

const GuideModal = ({ nightMode }) => {

    return (
        <div id='guide-modal' className='modal' style={nightMode ? theme.dmSecondary : theme.lmWhite}>
            <div className="modal-content" style={nightMode ? theme.dmSecondary : theme.lmWhite}>
            <h4 className="grey-text">Guide</h4>
            <div className="guide-modal-cont-1">
                <div className="playback-guide">
                    <h5>Playback Controls</h5>
                    <ul><span className="guide-ins">play</span><span className="guide-keys">ctrl + a</span></ul>
                    <ul><span className="guide-ins">stop</span><span className="guide-keys">ctrl + s</span></ul>
                    <ul><span className="guide-ins">playback rate/pitch</span><span className="guide-keys">Blue Knob</span></ul>
                    <ul><span className="guide-ins">zoom control</span><span className="guide-keys">Red Knob</span></ul>
                </div>
                <div className="region-guide">
                    <h5>Region Controls</h5>
                    <ul><span className="guide-ins">play/trigger region</span><span className="guide-keys">shift + (region #)</span></ul>
                    <p>Regions can be loaded into the waveform using the tabs directly below the waveform. To save a region, load the memory region (6th tab) into the waveform, adjust it to the position you want to save, then click "save", tag the region with a description or detail, then click "submit".</p>
                </div>
            </div>
            
            
            </div>
        </div>
    )

}

export default GuideModal
