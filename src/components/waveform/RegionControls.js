import React, { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js'
import theme from '../layout/Theme';

const RegionControls = ({ 
    addRegionOne,
    removeRegionOne,
    addRegionTwo,
    removeRegionTwo, 
    addRegionThree,
    removeRegionThree, 
    addRegionFour, 
    removeRegionFour,
    addRegionFive,
    removeRegionFive, 
    addMemoryRegion,
    removeMemoryRegion, 
    addNoteRegion,
    removeNoteRegion,
    clearRegions,
    triggerOne,
    triggerTwo,
    triggerThree,
    triggerFour,
    triggerFive,
    triggerMemory,
    triggerNote,
    notesMode,
    memorySaveClick,
    noteSaveClick,
    loadRegionOne,
    loadRegionTwo,
    loadRegionThree,
    loadRegionFour,
    loadRegionFive,
    copyRegionOne,
    copyRegionTwo,
    copyRegionThree,
    copyRegionFour,
    copyRegionFive,
    nightMode
}) => {

    useEffect(()=>{
        window.addEventListener('keydown', handleRegionKey);
        return () => {
            window.removeEventListener('keydown', handleRegionKey);
        };
    });

    const [regionOneStatus, setRegionOneStatus] = useState(false);
    const [regionTwoStatus, setRegionTwoStatus] = useState(false);
    const [regionThreeStatus, setRegionThreeStatus] = useState(false);
    const [regionFourStatus, setRegionFourStatus] = useState(false);
    const [regionFiveStatus, setRegionFiveStatus] = useState(false);
    const [regionMemoryStatus, setRegionMemoryStatus] = useState(false);
    const [regionNoteStatus, setRegionNoteStatus] = useState(false);
    const [notesModeStatus, setNotesModeStatus] = useState(false);

    const regionOneEnable = () => {
        setRegionOneStatus(true);
        addRegionOne();
    };

    const regionOneDisable = () => {
        setRegionOneStatus(false);
        removeRegionOne();
    };

    const regionTwoEnable = () => {
        setRegionTwoStatus(true);
        addRegionTwo();
    };

    const regionTwoDisable = () => {
        setRegionTwoStatus(false);
        removeRegionTwo();
    };

    const regionThreeEnable = () => {
        setRegionThreeStatus(true);
        addRegionThree();
    };

    const regionThreeDisable = () => {
        setRegionThreeStatus(false);
        removeRegionThree();
    };

    const regionFourEnable = () => {
        setRegionFourStatus(true);
        addRegionFour();
    };

    const regionFourDisable = () => {
        setRegionFourStatus(false);
        removeRegionFour();
    };

    const regionFiveEnable = () => {
        setRegionFiveStatus(true);
        addRegionFive();
    };

    const regionFiveDisable = () => {
        setRegionFiveStatus(false);
        removeRegionFive();
    };

    const regionMemoryEnable = () => {
        setRegionMemoryStatus(true);
        addMemoryRegion();
    };

    const regionMemoryDisable = () => {
        setRegionMemoryStatus(false);
        removeMemoryRegion();
    };

    const loadMemoryRegionOne = () => {
        try {
            loadRegionOne();
            setRegionOneStatus(true);
        } catch (error) {
            M.toast({html: 'Cue is empty'});
        };
    };

    const loadMemoryRegionTwo = () => {
        try {
            loadRegionTwo();
            setRegionTwoStatus(true);
        } catch (error) {
            M.toast({html: 'Cue is empty'});
        };
    };

    const loadMemoryRegionThree = () => {
        try {
            loadRegionThree();
            setRegionThreeStatus(true);
        } catch (error) {
            M.toast({html: 'Cue is empty'});
        };
    };

    const loadMemoryRegionFour = () => {
        try {
            loadRegionFour();
            setRegionFourStatus(true);
        } catch (error) {
            M.toast({html: 'Cue is empty'});
        };
    };

    const loadMemoryRegionFive = () => {
        try {
            loadRegionFive();
            setRegionFiveStatus(true);
        } catch (error) {
            M.toast({html: 'Cue is empty'});
        };
    };

    const regionNoteEnable = () => {
        setRegionNoteStatus(true);
        addNoteRegion();
    };

    const regionNoteDisable = () => {
        setRegionNoteStatus(false);
        removeNoteRegion();
    };

    const clearWaveRegions = () => {
        setRegionOneStatus(false);
        setRegionTwoStatus(false);
        setRegionThreeStatus(false);
        setRegionFourStatus(false);
        setRegionFiveStatus(false);
        setRegionMemoryStatus(false);
        setRegionNoteStatus(false);
        clearRegions();
    };

    const enableNotesMode = () => {
        clearWaveRegions();
        notesMode();
        setNotesModeStatus(true);
    };

    const disableNotesMode = () => {
        clearWaveRegions();
        setNotesModeStatus(false);
    };


    const handleRegionKey = (e) => {
        e.stopPropagation();
        if(regionOneStatus && e.shiftKey && e.keyCode === 49){
            try {
                triggerOne();
            } catch {
                regionOneEnable();
            };
        } else if (regionTwoStatus && e.shiftKey  && e.keyCode === 50){
            try {
                triggerTwo();
            } catch {
                regionTwoEnable();
            };
        } else if (regionThreeStatus && e.shiftKey  && e.keyCode === 51){
            try {
                triggerThree();
            } catch {
                regionThreeEnable();
            };
        } else if (regionFourStatus && e.shiftKey  && e.keyCode === 52){
            try {
                triggerFour();
            } catch {
                regionFourEnable();
            };
        } else if (regionFiveStatus && e.shiftKey  && e.keyCode === 53){
            try {
                triggerFive();
            } catch {
                regionFiveEnable();
            };
        } else if (regionMemoryStatus && e.shiftKey  && e.keyCode === 54){
            try {
                triggerMemory();
            } catch {
                regionMemoryEnable();
            };
        } else if (regionNoteStatus && e.shiftKey  && e.keyCode === 55){
            try {
                triggerNote();
            } catch {
                regionNoteEnable();
            };
        }; 
    };

    return (
        <>
        <div className="region-controls" style={nightMode ? theme.dmRegionControl : theme.lmRegionControl}>

        <div 
        onClick={(regionOneStatus ? regionOneDisable : regionOneEnable)} 
        className="region-control-trigger">
            <i className={'small material-icons region1' + (regionOneStatus ? ' true' : ' false')}>
                call_to_action </i>
            Region [1]
        </div>

        <div 
        onClick={(regionTwoStatus ? regionTwoDisable : regionTwoEnable)} 
        className="region-control-trigger">
            <i className={'small material-icons region2' + (regionTwoStatus ? ' true' : ' false')}>
                call_to_action </i>
            Region [2]
        </div>

        <div 
        onClick={(regionThreeStatus ? regionThreeDisable : regionThreeEnable)} 
        className="region-control-trigger">
            <i className={'small material-icons region3' + (regionThreeStatus ? ' true' : ' false')}>
                call_to_action </i>
            Region [3]
        </div>

        <div 
        onClick={(regionFourStatus ? regionFourDisable : regionFourEnable)} 
        className="region-control-trigger">
            <i className={'small material-icons region4' + (regionFourStatus ? ' true' : ' false')}>
                call_to_action </i>
            Region [4]
        </div>

        <div 
        onClick={(regionFiveStatus ? regionFiveDisable : regionFiveEnable)} 
        className="region-control-trigger">
            <i className={'small material-icons region5' + (regionFiveStatus ? ' true' : ' false')}>
                call_to_action </i>
            Region [5]
        </div>

        <div 
        onClick={(regionMemoryStatus ? regionMemoryDisable : regionMemoryEnable)} 
        className="region-control-trigger">
            <i className={'small material-icons regionMemory' + (regionMemoryStatus ? ' true' : ' false')}>
                archive </i>
            Memory [6]
        </div>

        <div 
        onClick={(regionNoteStatus ? regionNoteDisable : regionNoteEnable)} 
        className="region-control-trigger">
            <i className={'small material-icons regionNote' + (regionNoteStatus ? ' true' : ' false')}>
                note </i>
            Note
        </div>

        <div 
        onClick={clearWaveRegions} className="region-control-trigger">
            <i className="small material-icons">
                delete_forever </i>
            Clear All
        </div>

        <div 
        onClick={(notesModeStatus ? disableNotesMode : enableNotesMode)} 
        className="region-control-presets" style={nightMode ? theme.dmRegionControl : theme.lmDarkGrey}>
            <i className={'small material-icons notesMode' + (notesModeStatus ? ' true' : ' false')}>
            speaker_notes </i>
            Notes Mode
        </div>
        
        </div>
        
        <div className="region-status-bar" style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}>
            <div className="region-status-space" >
            <div className="region-control-small-save" >
            <div onClick={copyRegionOne} className="region-control-small-save-btn">Copy</div>
            </div>
            </div>
            <div className="region-status-space"style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}>
            <div className="region-status-space" >
            <div className="region-control-small-save" >
            <div onClick={copyRegionTwo} className="region-control-small-save-btn">Copy</div>
            </div>
            </div>
            </div>
            <div className="region-status-space"style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}>
            <div className="region-status-space" >
            <div className="region-control-small-save" >
            <div onClick={copyRegionThree} className="region-control-small-save-btn">Copy</div>
            </div>
            </div>
            </div>
            <div className="region-status-space"style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}>
            <div className="region-status-space" >
            <div className="region-control-small-save" style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}>
            <div onClick={copyRegionFour} className="region-control-small-save-btn">Copy</div>
            </div>
            </div>
            </div>
            <div className="region-status-space"style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}>
            <div className="region-status-space">
            <div className="region-control-small-save" style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}>
            <div onClick={copyRegionFive} className="region-control-small-save-btn">Copy</div>
            </div>
            </div>
            </div>
        
            <div className="region-status-space" style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}>
            <div className="region-control-small-save" style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}>
            { regionMemoryStatus ?

            <div onClick={memorySaveClick} className="region-control-small-save-btn">Save</div>
            : <></> }

            </div> 
            </div>
            <div className="region-status-space" style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}>
            <div className="region-control-small-save" style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}>
            { regionNoteStatus ? 

            <div onClick={noteSaveClick} className="region-control-small-save-btn">Save</div>
            : <></> }

            </div> 
            </div>
            
            <div className="region-status-space" style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}></div>
            <div className="region-status-space" style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}></div>
        </div>

        <div className="region-status-bar" style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}>
            <div className="region-status-space" >
            <div className="region-control-small-save" >
            <div onClick={loadMemoryRegionOne} className="region-control-small-save-btn">Load</div>
            </div>
            </div>
            <div className="region-status-space"style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}>
            <div className="region-status-space" >
            <div className="region-control-small-save" >
            <div onClick={loadMemoryRegionTwo} className="region-control-small-save-btn">Load</div>
            </div>
            </div>
            </div>
            <div className="region-status-space"style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}>
            <div className="region-status-space" >
            <div className="region-control-small-save" >
            <div onClick={loadMemoryRegionThree} className="region-control-small-save-btn">Load</div>
            </div>
            </div>
            </div>
            <div className="region-status-space"style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}>
            <div className="region-status-space" >
            <div className="region-control-small-save" style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}>
            <div onClick={loadMemoryRegionFour} className="region-control-small-save-btn">Load</div>
            </div>
            </div>
            </div>
            <div className="region-status-space"style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}>
            <div className="region-status-space">
            <div className="region-control-small-save" style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}>
            <div onClick={loadMemoryRegionFive} className="region-control-small-save-btn">Load</div>
            </div>
            </div>
            </div>
            
            <div className="region-status-space" style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}></div>
            <div className="region-status-space" style={nightMode ? theme.dmRegionSaveLoad : theme.lmLightBlue}></div>
        </div>
        </>
    )
}

RegionControls.propTypes = {
    addRegionOne: PropTypes.func.isRequired,
    removeRegionOne: PropTypes.func.isRequired,
    addRegionTwo: PropTypes.func.isRequired,
    removeRegionTwo: PropTypes.func.isRequired,
    addRegionThree: PropTypes.func.isRequired,
    removeRegionThree: PropTypes.func.isRequired,
    addRegionFour: PropTypes.func.isRequired,
    removeRegionFour: PropTypes.func.isRequired,
    addRegionFive: PropTypes.func.isRequired,
    removeRegionFive: PropTypes.func.isRequired,
    addMemoryRegion: PropTypes.func.isRequired,
    removeMemoryRegion: PropTypes.func.isRequired,
    addNoteRegion: PropTypes.func.isRequired,
    removeNoteRegion: PropTypes.func.isRequired,
    clearRegions: PropTypes.func.isRequired,
    triggerOne: PropTypes.func.isRequired,
    triggerTwo: PropTypes.func.isRequired,
    triggerThree: PropTypes.func.isRequired,
    triggerFour: PropTypes.func.isRequired,
    triggerFive: PropTypes.func.isRequired,
    triggerMemory: PropTypes.func.isRequired,
    triggerNote: PropTypes.func.isRequired,
    notesMode: PropTypes.func.isRequired,
    memorySaveClick: PropTypes.func.isRequired,
    noteSaveClick: PropTypes.func.isRequired,
    loadRegionOne: PropTypes.func.isRequired,
    loadRegionTwo: PropTypes.func.isRequired,
    loadRegionThree: PropTypes.func.isRequired,
    loadRegionFour: PropTypes.func.isRequired,
    loadRegionFive: PropTypes.func.isRequired
};

export default RegionControls;