import axios from 'axios';
import React, { useState } from 'react';
import { BACKEND_URL, CLOUDINARY_URL } from '../constants';
import { useNavigate } from 'react-router-dom';

const UploadFile = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [postData, setPostData] = useState('');
    const handleImageUpload = (data) => {
        setLoading(true);
        const instance = axios.create()
        const formData = new FormData();
        formData.append("file", data);
        formData.append("upload_preset", "nahowflp");
        instance.post(CLOUDINARY_URL, formData)
            .then(function (response) {
                setPostData(response?.data?.secure_url);
                // console.log(response);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            });
        }
        const handleSubmit = async (e) => {
            e.preventDefault();
            setLoading(true);
            const data = await axios.post(`${BACKEND_URL}/postMedia`, {
                mediaUploaded: postData
            })
            setPostData('');
            setLoading(false);
            navigate('/')
        }
        
        return <div className='col-md-6 mt-2 mx-auto upload-box'>
        <form class="form-cont row col-md-12 g-3">
            <div class="col-12">
                <div class="form-check">
                    <input type='file' id="gridCheck" onChange={(e) => handleImageUpload(e.target.files[0])} />
                    {
                        loading && <div class="spinner-border text-warning" role="status">
                            <span class="sr-only">Uploading...</span>
                        </div>
                    }
                </div>
            </div>
            <div className='col-md-4'></div>
            <div class="col-md-4 mt-5">
                <button type="submit" class="btn btn-info" onClick={handleSubmit}>{`${loading ? 'Uploading...' : 'Click to upload'}`}</button>
            </div>
        </form>
    </div>
}

export default UploadFile;