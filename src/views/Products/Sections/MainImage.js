import React from 'react'
import ReactImageMagnify from 'react-image-magnify'

import './zoom.css'

function MainImage({...props}) {
    console.log("image props", props)
    return (
        <div>
            <ReactImageMagnify
                {...{
                    smallImage: {
                        alt: 'Wristwatch by Versace',
                        isFluidWidth: false,
                        src: props.image.product_url,
                        width: 240,// (required)
                        height: 240// (required)
                        // srcSet: src.srcSet,
                        //sizes: '(max-width: 240px)'
                    },
                    largeImage: {
                        src: props.image.large_url,
                        // isFluidWidth: true,
                        width: 600,
                        height: 600
                    },
                    // enlargedImageContainerDimensions: {
                    //     width: '150%',
                    //     height: '150%'
                    // },
                    enlargedImagePosition: 'over'
                    //lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                }}
            />
            
            {/*<img
                alt="..."
                src={props.image.product_url}
                //className={navImageClasses}
            />*/}
        </div>
    )
}

export default MainImage