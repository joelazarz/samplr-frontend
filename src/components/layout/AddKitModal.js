import React, { useState } from 'react'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addKit } from '../../actions/discoveryActions';

import ReactFilestack from 'filestack-react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddKitModal = ({ addKit }) => {
    const [name, setName] = useState('')
    const [detail, setDetail] = useState('')
    const [image, setImage] = useState('')
    const [sample, setSample] = useState('')

    const onSubmit = () => {
        if(name === '' || detail === ''){
            M.toast({ html: 'Please enter Name and Detail' })
        } else {
            console.log(name, detail, image, sample)
            const newKit = {
                name,
                detail,
                image,
                sample
            }
            console.log('onSubmit newKit', newKit)
            addKit(newKit)
            M.toast({ html: 'Kit Added'})
        }
        setName('')
        setDetail('')
        setImage('')
        setSample('')
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
                        id="name-input"
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
                        id="detail-input"
                        value={detail}
                        onChange={e => setDetail(e.target.value)}/>
                        <label htmlFor='message' className='active'>Detail</label>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <input 
                        type='text'
                        name='image'
                        id="image-input"
                        value={image}
                        onChange={e => setImage(e.target.value)}/>
                        <label htmlFor='message' className='active'>Image URL</label>
                    </div>
                </div>

                <div className="file-field input-field">
                <ReactFilestack
                apikey={process.env.REACT_APP_FILESTACK_API_KEY}
                componentDisplayMode={{
                    type: 'button',
                    customText: 'Upload Sample',
                    customClass: 'btn'
                }}
                onSuccess={(res) => setSample(res.filesUploaded[0].url)}
                />
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
