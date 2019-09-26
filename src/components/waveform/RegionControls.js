import React, { useState, useEffect } from 'react'
import AddMemoryBtn from './AddMemoryBtn'
import { PropTypes } from 'prop-types';

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
    notesMode
}) => {

    useEffect(()=>{
        window.addEventListener('keydown', handleRegionKey);
    })

    const [regionOneStatus, setRegionOneStatus] = useState(false)
    const [regionTwoStatus, setRegionTwoStatus] = useState(false)
    const [regionThreeStatus, setRegionThreeStatus] = useState(false)
    const [regionFourStatus, setRegionFourStatus] = useState(false)
    const [regionFiveStatus, setRegionFiveStatus] = useState(false)
    const [regionMemoryStatus, setRegionMemoryStatus] = useState(false)
    const [regionNoteStatus, setRegionNoteStatus] = useState(false)

    const regionOneEnable = () => {
        addRegionOne()
        setRegionOneStatus(true)
    }

    const regionOneDisable = () => {
        removeRegionOne()
        setRegionOneStatus(false)
    }

    const regionTwoEnable = () => {
        addRegionTwo()
        setRegionTwoStatus(true)
    }

    const regionTwoDisable = () => {
        removeRegionTwo()
        setRegionTwoStatus(false)
    }

    const regionThreeEnable = () => {
        addRegionThree()
        setRegionThreeStatus(true)
    }

    const regionThreeDisable = () => {
        removeRegionThree()
        setRegionThreeStatus(false)
    }

    const regionFourEnable = () => {
        addRegionFour()
        setRegionFourStatus(true)
    }

    const regionFourDisable = () => {
        removeRegionFour()
        setRegionFourStatus(false)
    }

    const regionFiveEnable = () => {
        addRegionFive()
        setRegionFiveStatus(true)
    }

    const regionFiveDisable = () => {
        removeRegionFive()
        setRegionFiveStatus(false)
    }

    const regionMemoryEnable = () => {
        addMemoryRegion()
        setRegionMemoryStatus(true)
    }

    const regionMemoryDisable = () => {
        removeMemoryRegion()
        setRegionMemoryStatus(false)
    }

    const regionNoteEnable = () => {
        addNoteRegion()
        setRegionNoteStatus(true)
    }

    const regionNoteDisable = () => {
        removeNoteRegion()
        setRegionNoteStatus(false)
    }

    const clearWaveRegions = () => {
        clearRegions()
        setRegionOneStatus(false)
        setRegionTwoStatus(false)
        setRegionThreeStatus(false)
        setRegionFourStatus(false)
        setRegionFiveStatus(false)
        setRegionMemoryStatus(false)
        setRegionNoteStatus(false)
    }


    const handleRegionKey = (e) => {
        e.stopPropagation()
        if(regionOneStatus && e.keyCode === 49){
            triggerOne()
        } else if (regionTwoStatus && e.keyCode === 50){
            triggerTwo()
        } else if (regionThreeStatus && e.keyCode === 51){
            triggerThree()
        } else if (regionFourStatus && e.keyCode === 52){
            triggerFour()
        } else if (regionFiveStatus && e.keyCode === 53){
            triggerFive()
        } else if (regionMemoryStatus && e.keyCode === 54){
            triggerMemory()
        } else if (regionNoteStatus && e.keyCode === 55){
            triggerNote()
        } 
    }

    const val1 = 2
    const val2 = 10

    return (
        <div className="region-controls">
        <div className={`${val1}`}></div>

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
            <div className="region-control-small-save">
            { regionMemoryStatus ?
            <> 
            <AddMemoryBtn />
            </>
            : <></> }
            </div> 
        </div>

        <div 
        onClick={(regionNoteStatus ? regionNoteDisable : regionNoteEnable)} 
        className="region-control-trigger">
            <i className={'small material-icons regionNote' + (regionNoteStatus ? ' true' : ' false')}>
                note </i>
            Note
            <div className="region-control-small-save">
            { regionNoteStatus ? 
            <div className="region-control-small-save-btn">Save</div>
            : <></> }
            </div> 
        </div>

        <div 
        onClick={clearWaveRegions} className="region-control-trigger">
            <i className="small material-icons">
                delete_forever </i>
            Clear All
        </div>

        <div 
        onClick={() => {notesMode(val1,val2)}} 
        className="region-control-presets">
            <i className="small material-icons">
                archive </i>
            Notes Mode
        </div>
        
        </div>
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
    notesMode: PropTypes.func.isRequired
}

export default RegionControls