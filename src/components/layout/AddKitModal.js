import React, { useState } from 'react'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addKit } from '../../actions/discoveryActions';
import ReactFilestack from 'filestack-react';
import M from 'materialize-css/dist/js/materialize.min.js';
import theme from './Theme';

let fileStackKey;
    
    if (process.env.NODE_ENV !== 'production') {
        fileStackKey = process.env.REACT_APP_FILESTACK_API_KEY_DEV;
    } else {
        fileStackKey = process.env.REACT_APP_FILESTACK_API_KEY_PROD;
    };
    
const AddKitModal = ({ addKit, nightMode }) => {
    const [name, setName] = useState('');
    const [detail, setDetail] = useState('');
    const [image, setImage] = useState('');
    const [sample, setSample] = useState('');
    const [error, setError] = useState(false);

    const onSubmit = () => {
        if(name === '' || detail === '' || image === '' | sample === '') {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
        } else {
            const newKit = {
                name,
                detail,
                image,
                sample
            }
            addKit(newKit);
            M.toast({ html: 'Kit Added'});
        }
        setName('');
        setDetail('');
        setImage('');
        setSample('');
    }

    const fileOptions = {
            fromSources: ['local_file_system', 'url', 'dropbox', 'googledrive'],
            accept: ["audio/*"],
            maxSize: 10000000
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
                apikey={fileStackKey}
                actionOptions={fileOptions}
                componentDisplayMode={{
                    type: 'button',
                    customText: 'Upload Sample',
                    customClass: 'waves-effect blue-grey lighten-1 waves-light btn'
                }}
                onSuccess={(res) => setSample(res.filesUploaded[0].url)}
                />
                </div>

                <div className='modal-footer' style={nightMode ? theme.dmSecondary : theme.lmWhite}>
                { error  ? <span style={{marginRight: '3em', color: 'red'}}>Please fill out all fields</span> : <></> }
                    <a href='#!'
                    onClick={onSubmit}
                    className={(!error ? '' : 'modal-close ') + 'waves-effect black waves-light btn'}>Add Kit</a>
                </div>

            </div>
        </div>
    );

};

AddKitModal.propTypes = {
    addKit: PropTypes.func.isRequired
};

export default connect(null, { addKit })(AddKitModal);
