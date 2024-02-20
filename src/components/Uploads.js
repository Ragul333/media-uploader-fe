import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BACKEND_URL } from '../constants'
import Card from './Card'

const Uploads = () => {
    const [posts, setPosts] = useState([])

    const getUploadedMedias = async () => {
        try {
            const { data } = await axios.get(`${BACKEND_URL}/getMedia`);
            setPosts(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUploadedMedias()
    }, [])
    return (
        <div className='row'>
            {posts?.length === 0 ? <div className='container'>
                <div className='row col-md-6 mx-auto mt-4'>
                    <div class="spinner-border text-info" role="status">
                        <span class="sr-only">Uploading...</span>
                    </div>
                </div>
            </div> : posts?.map((data) => {
                return <div className='col-md-4'>
                    <Card data={data} />
                </div>
            })}
        </div>
    )
}

export default Uploads