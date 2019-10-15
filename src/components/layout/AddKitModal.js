import React, { useState } from 'react'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addKit } from '../../actions/discoveryActions';

import ReactFilestack from 'filestack-react'
import M from 'materialize-css/dist/js/materialize.min.js'
import theme from './Theme';

const AddKitModal = ({ addKit, nightMode }) => {
    const [name, setName] = useState('')
    const [detail, setDetail] = useState('')
    const [image, setImage] = useState('')
    const [sample, setSample] = useState('')

    const onSubmit = () => {
        if(name === '' || detail === ''){
            M.toast({ html: 'Please enter Name and Detail' })
        } else {
            const newKit = {
                name,
                detail,
                image,
                sample
            }
            addKit(newKit)
            M.toast({ html: 'Kit Added'})
        }
        setName('')
        setDetail('')
        setImage('')
        setSample('')
    }

    const fileOptions = {
        fromSources: ['local_file_system'],
        maxFiles: 1,
    }


    return (
        <div id="add-kit-modal" className='modal' style={nightMode ? theme.dmSecondary : theme.lmWhite}>
            <div className='modal-content' style={nightMode ? theme.dmSecondary : theme.lmWhite}>
                <h4 className="grey-text">Add Kit</h4>

                <div className='row'>
                    <div className='input-field'>
                        <input 
                        type='text'
                        style={{color: 'grey'}}
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
                        style={{color: 'grey'}}
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
                        style={{color: 'grey'}}
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
                options={fileOptions}
                componentDisplayMode={{
                    type: 'button',
                    customText: 'Upload Sample',
                    customClass: 'waves-effect blue-grey lighten-1 waves-light btn'
                }}
                onSuccess={(res) => setSample(res.filesUploaded[0].url)}
                />
                </div>

            </div>
            <div className='modal-footer' style={nightMode ? theme.dmSecondary : theme.lmWhite}>
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

export default connect(null, { addKit })(AddKitModal)
