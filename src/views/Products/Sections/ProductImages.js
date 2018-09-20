import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setMainImage } from '../../../redux/actions'

import {
    Image,
    Container,
    Grid
} from 'semantic-ui-react'

// react component for creating beautiful carousel
import Slider from 'react-slick'
import MainImage from './MainImage'

class ProductImages extends Component {
    
    renderImages(images){
        return (
            images.map((image, key) => {
                return (
                    <Container key={key}>    
                        <Image
                        fluid
                            src={image.product_url}
                            centered
                            onClick={() => this.props.setMainImage(image)}
                        />
                    </Container>
                )
            })
        )
    }

    
    render(){
      const { mainImage, thumbnails } = this.props
        
      var settings = {
        
        dots: false,
        infinite: false,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
      }

        return (
            <Grid columns='equal'>
                <Grid.Row>
                    <Grid.Column>
                        <MainImage 
                            image={mainImage} 
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Slider {...settings}>
                            {this.renderImages(thumbnails)}
                        </Slider>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default connect(null, { setMainImage })(ProductImages)