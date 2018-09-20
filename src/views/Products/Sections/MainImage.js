import React from 'react'
import ReactImageMagnify from 'react-image-magnify'

function MainImage({...props}) {
    const { classes } = props
    
    return (
        <ReactImageMagnify
            {...{
                smallImage: {
                    isFluidWidth: false,
                    src: props.image.product_url,
                    width: 240,// (required)
                    height: 240// (required)
                },
                largeImage: {
                    src: props.image.large_url,
                    width: 600,
                    height: 600
                },
                enlargedImagePosition: 'over',
                imageClassName: classes,
                style: {
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }
            }}
        />
    )
}

export default MainImage