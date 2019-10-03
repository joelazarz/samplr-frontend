import React, { useState, useEffect } from 'react'
import NotesCard from './NotesCard';
import Waveform from '../waveform/Waveform';
import MemoryCard from './MemoryCard';
import CueCard from './CueCard';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux'

import { getKit } from '../../actions/kitActions';
import theme from '../layout/Theme';


const Kit = ({ kit: { kit, loading }, user, getKit, nightMode }) => {

    const [notesButton, setNotesButton] = useState(false)
    const [memoryButton, setMemoryButton] = useState(false)
    const [cueViewButton, setCueViewButton] = useState(false)
    const [digCue, setDigCue] = useState([])

    useEffect(() => {
        getKit(window.location.pathname)
    }, [])
    // using the window.location.pathname to direct the action to the endpoint in the api :/
    // console.log('Kit.js [window.location.pathname]', window.location.pathname)

    // kit state functions
    const viewNotesButton = () => {
        setNotesButton(true)
        setMemoryButton(false)
        setCueViewButton(false)
    }
    const viewMemoryButton = () => {
        setMemoryButton(true)
        setNotesButton(false)
        setCueViewButton(false)
    }
    const cueMemoryButton = (dig) => {
        !digCue.includes(dig) ? setDigCue([...digCue, dig]) : setDigCue([...digCue])
    }
    const removeFromCue = (dig) => {
        let digArray = digCue.filter(digObj => digObj !== dig);
        setDigCue(digArray)
    }
    const shiftDig = () => {
        digCue.shift()
        setDigCue([...digCue])
    }

    if (loading || user === null || kit === null) {
        return <Spinner />
    }

    return (
        <>
        <div className="row">
            <div className="col s8" style={nightMode ? theme.dmPrimary : theme.lmWhite}> 
            <div className="kit-main-container">
                <div className="kit-waveform-container">
                    <Waveform nightMode={nightMode} key={kit.id} userId={user.id} id={kit.id} src={kit.sample} notes={kit.notes} digs={kit.digs} digCue={digCue} shiftDig={shiftDig} />
                </div>

                <div className="kit-name-container" style={nightMode ? theme.dmAccent : theme.lmLightBlue}>
                    <span>[ Kit Name ] : {kit.name}</span>
                </div>

                <div className= "kit-detail">
                    <div className="kit-detail-container" style={nightMode ? theme.dmSecondary : theme.lmAccentTwo}>
                        <div className="kit-detail-text-container" style={nightMode ? theme.dmKitDetail : theme.lmAccent}>
                        {kit.detail}
                        </div>
                    </div>

                    <div className="kit-detail-image-container" style={nightMode ? theme.dmImgContainer : theme.lmGrey}>
                        <img src={kit.image} alt={kit.name} />
                    </div>
                </div>
                </div>
            </div>


            <div className="col s4" style={nightMode ? theme.dmSecondary : theme.lmAccentTwo}>
            <div className="height">

            <div className="notes-specs" style={nightMode ? theme.dmAccent : theme.lmWhite}>
                    <div className="specs-header" style={nightMode ? theme.dmSecondary : theme.lmGrey}>
                    <div className='specs-button'><button style={nightMode ? theme.dmBtnSidebar : theme.lmBtnSidebar} onClick={viewNotesButton} className="waves-effect waves-light btn-small">Notes</button></div>
                    <div className='specs-button'><button style={nightMode ? theme.dmBtnSidebar : theme.lmBtnSidebar} onClick={viewMemoryButton} className="waves-effect waves-light btn-small">Memory</button></div>
                    </div>
                    <>
                    { notesButton ? kit.notes.map(note => <NotesCard nightMode={nightMode} key={note.id} note={note} />) : <></> }


                    { memoryButton ? kit.digs.map(dig => <MemoryCard nightMode={nightMode} clickHandler={cueMemoryButton} key={dig.id} dig={dig} />) : <></> }
                    </>
                </div>
            
                <div className="regions-specs" style={nightMode ? theme.dmAccent : theme.lmWhite}>
                    <div className="specs-header" style={nightMode ? theme.dmSecondary : theme.lmGrey}>
                    <div className='specs-button'><button style={nightMode ? theme.dmBtnSidebar : theme.lmBtnSidebar} className="waves-effect waves-light btn-small">Cue</button></div>
                    <div className='specs-button'><button style={nightMode ? theme.dmBtnSidebar : theme.lmBtnSidebar} className="waves-effect waves-light btn-small">Help</button></div>
                    </div>
                        { digCue.map(dig => dig.kit_id === kit.id ? <CueCard nightMode={nightMode} key={dig.id} removeHandler={removeFromCue} dig={dig}/> : <></>) }
                </div>


            </div>
            </div>

        </div>  
        </>
    )
}

const mapStateToProps = state => ({
    kit: state.kit
})

export default connect(mapStateToProps, { getKit })(Kit)
