import React, { useState } from 'react'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addKit } from '../../actions/discoveryActions';

import M from 'materialize-css/dist/js/materialize.min.js'

const AddKitModal = ({ addKit }) => {
    const [name, setName] = useState('')
    const [detail, setDetail] = useState('')

    const onSubmit = () => {
        if(name === '' || detail === ''){
            M.toast({ html: 'Please enter Name and Detail' })
        } else {
            console.log(name, detail)
            const newKit = {
                name,
                detail
            }
            addKit(newKit)
            M.toast({ html: 'Kit Added'})
        }
        setName('')
        setDetail('')
    }

    return (
        <div id="add-kit-modal" className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>Add Kit</h4>

                <div className='row'>
                    <div className='input-field'>
                        <input 
                        type='text'
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}/>
                        <label htmlFor='message' className='active'>Name</label>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <input 
                        type='text'
                        name='detail'
                        value={detail}
                        onChange={e => setDetail(e.target.value)}/>
                        <label htmlFor='message' className='active'>Detail</label>
                    </div>
                </div>

            </div>
            <div className='modal-footer'>
                <a href='#!'
                onClick={onSubmit}
                className='modal-close waves-effect black waves-light btn'>Enter</a>
            </div>
        </div>
    )

}

AddKitModal.propTypes = {
    addKit: PropTypes.func.isRequired
}

const modalStyle = {
    width: '65%',
    height: '65%'
}

export default connect(null, { addKit })(AddKitModal)
