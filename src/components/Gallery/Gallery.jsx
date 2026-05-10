import './Gallery.css'
import React from 'react'
import g1 from '../../assets/gallery-1.png'
import g2 from '../../assets/gallery-2.png'
import g3 from '../../assets/gallery-3.png'
import g4 from '../../assets/gallery-4.png'
import arrow from '../../assets/white-arrow.png'


const gallery_Images=[
    g1,
    g2,
    g3,
    g4,
]

const Gallery = () => {
  return (
    <div id='campus' className='g_main'>
      <div className="titles">
            <p>GALLERY</p>
            <h1>Campus Photos</h1>
        </div>
        <div className="gallery_image_section">
            {gallery_Images.map((img,index)=>(
                <div className="gallery_card" key={index}>
                    <img src={img} alt="" />
                </div>
            ))}
        </div>
        <button className='gallery_button'>See more here<img src={arrow} alt="" /></button>
    </div>
  )
}

export default Gallery
