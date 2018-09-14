import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setMainImage } from '../../../redux/actions'

// react component for creating beautiful carousel
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './zoom.css'

class Thumbnails extends Component {
    
    renderImages(images){
        return (
            images.map((image, key) => {
                return (
                    <div key={key}>
                        <img
                            alt="..."
                            src={image.mini_url}
                            onmouseover={()=>{this.props.setMainImage(image)}}//className={navImageClasses}
                        />
                    </div>
                )
            })
        )
    }
    
    render(){
        
        var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        }
        
        console.log("thumbnails", this.props)
        return (
            <Slider {...settings}>
                {this.renderImages(this.props.images)}
            </Slider>
        )
    }
}

export default connect(null, { setMainImage })(Thumbnails)