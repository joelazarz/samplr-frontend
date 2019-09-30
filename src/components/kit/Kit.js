import React, { useState, useEffect } from 'react'
import Navbar from '../layout/Navbar';
import NotesCard from './NotesCard';
import Waveform from '../waveform/Waveform';
import MemoryCard from './MemoryCard';
import CueCard from './CueCard';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux'

import { getKit } from '../../actions/kitActions';


const Kit = ({ kit: { kit, loading }, user, getKit }) => {

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
    const viewCueButton = () => {
        setCueViewButton(true)
        setNotesButton(false)
        setMemoryButton(false)
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
            <Navbar />
            <div className="col s8 grey lighten-5">
            <div className="kit-main-container">
                <div className="kit-waveform-container">
                    <Waveform key={kit.id} userId={user.id} id={kit.id} src={kit.sample} notes={kit.notes} digs={kit.digs} digCue={digCue} shiftDig={shiftDig} />
                </div>

                <div className="kit-name-container">
                    <span>[ Kit Name ] : {kit.name}</span>
                </div>

                <div className= "kit-detail">
                    <div className="kit-detail-container">
                        <div className="kit-detail-header">
                            [ Kit Detail ]
                        </div>
                        <div className="kit-detail-text-container">
                            <h6>{kit.detail}</h6>
                        </div>
                    </div>

                    <div className="kit-detail-image-container">
                        <img src={kit.image} alt={kit.name} />
                    </div>
                </div>
                </div>
            </div>


            <div className="col s4 grey lighten-3">
            <div className="height">
            
                <div className="regions-specs">
                    <div className="specs-header">
                        <h5>{user.username}</h5>
                    </div>
                </div>
                <div className="notes-specs">
                    <div className="specs-header">
                    <div className='specs-button'><button onClick={viewNotesButton} className="waves-effect waves-light grey lighten-1 btn-small">Notes</button></div>
                    <div className='specs-button'><button onClick={viewMemoryButton} className="waves-effect waves-light grey lighten-1 btn-small">Memory</button></div>
                    <div className='specs-button'><button  onClick={viewCueButton} className="waves-effect waves-light grey lighten-1 btn-small">Cue</button></div>
                    </div>

                    { notesButton ? kit.notes.map(note => <NotesCard key={note.id} note={note} />) : <></> }

                    { cueViewButton ? digCue.map(dig => dig.kit_id === kit.id ? <CueCard key={dig.id} removeHandler={removeFromCue} dig={dig}/> : <></>) : <></> }

                    { memoryButton ? kit.digs.map(dig => <MemoryCard clickHandler={cueMemoryButton} key={dig.id} dig={dig} />) : <></> }

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
