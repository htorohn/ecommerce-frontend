import React from 'react'
import ReactImageMagnify from 'react-image-magnify'

function MainImage({...props}) {
    const { classes } = props
    
    return (
        <ReactImageMagnify
            {...{
                smallImage: {
                    isFluidWidth: true,
                    src: props.image.large_url,
                    //imageClassName: 'wrapped',
                    //width: 350,// (required)
                    //height: 350// (required)
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