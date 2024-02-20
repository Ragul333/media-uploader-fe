import React from 'react'

const Card = ({ data }) => {
    console.log(data)
    return (
        <div className="col-md-10 p-4 mt-4 mx-auto">
            <div class="card p-2">
                {
                    data?.file?.substr(data?.file?.length - 3) === 'mp4' ? <video controls autoplay className='card-img-top'>
                        <source src={`${data.file}`} type="video/mp4" />
                    </video>
                        :
                        <img src={data.file ? data.file : ''} class="card-img-top" alt="..." />

                }
            </div>
        </div>
    )
}

export default Card