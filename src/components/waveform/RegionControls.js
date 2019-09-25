import React from 'react'

const RegionControls = ({ 
    addRegionOne,
    addRegionTwo, 
    addRegionThree, 
    addRegionFour, 
    addRegionFive, 
    clearRegions, 
    addMemoryRegion, 
    addNoteRegion }) => {


    return (
        <div className="region-controls">

        <div onClick={addRegionOne} className="region-control-trigger">
            <i className="small material-icons">call_to_action </i>
            Region [1]
        </div>
            
        <div onClick={addRegionTwo} className="region-control-trigger">
            <i className="small material-icons">call_to_action </i>
            Region [2]
        </div>
            
        <div onClick={addRegionThree} className="region-control-trigger">
            <i className="small material-icons">call_to_action </i>
            Region [3]
        </div>
            
        <div onClick={addRegionFour} className="region-control-trigger">
            <i className="small material-icons">call_to_action </i>
            Region [4]
        </div>
            
        <div onClick={addRegionFive} className="region-control-trigger">
            <i className="small material-icons">call_to_action </i>
            Region [5]
        </div>
            
        <div onClick={addMemoryRegion} className="region-control-trigger">
            <i className="small material-icons">archive </i>
            Memory [6]
        </div>
        
        <div onClick={addNoteRegion} className="region-control-trigger">
            <i className="small material-icons">note </i>
            Note
        </div>

        <div onClick={clearRegions} className="region-control-trigger">
            <i className="small material-icons">delete_forever </i>
            Clear All
        </div>


        </div>
    )
}

export default RegionControls
