import React from 'react'

// react component for creating beautiful carousel
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './zoom.css'

function Thumbnails({...props}) {
    console.log("thumbnails", props)
    return (
        <div>
            <img
                alt="..."
                src={props.image}
                //className={navImageClasses}
            />
        </div>
    )
}

export default Thumbnails