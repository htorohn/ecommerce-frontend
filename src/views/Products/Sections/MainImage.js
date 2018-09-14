import React from 'react'
import ReactImageMagnify from 'react-image-magnify'
import classNames from "classnames"

//import './zoom.css'

function MainImage({...props}) {
    const { classes } = props
    console.log("image props", props)
    const imageClasses = classNames(
      classes.imgRaised,
      //classes.imgRoundedCircle,
      classes.imgFluid
    );
    
    return (
        // <div>
            <ReactImageMagnify
                {...{
                    smallImage: {
                        //alt: 'Wristwatch by Versace',
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
                    imageClassName: imageClasses,
                    style: {
                       //textAlign: 'center'
                       display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }
                }}
            />
        // </div>
    )
}

export default MainImage