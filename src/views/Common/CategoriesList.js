import React from "react"
import TextTruncate from 'react-text-truncate'

// react component for creating beautiful carousel
import Slider from "react-slick"
import { MAIN_URL } from '../../constants/Config'


import {
  Image,
  Container,
  Header
} from 'semantic-ui-react'

const productsItems =  (categories) => {
     console.log("props", categories)
    if (categories.data === 0) {
    } else{
      return (
        categories.data.map((taxon, key) => {
          //console.log("taxon", taxon)
          if(taxon.attributes.depth == 1){
            let taxonImageURL
            if (taxon.relationships.image.data != null){
              const current_image = categories.included.find((image) => image.id === taxon.relationships.image.data.id)
              console.log("current image", current_image)
              taxonImageURL = MAIN_URL + current_image.attributes.styles[3].url
              console.log("image URL", taxonImageURL)
              return (
                <Container href={"/shop/" + taxon.attributes.permalink}>
                  {/*<Image src={taxon.master.images[0].product_url} centered wrapped style={{height: 250}}/>*/}
                  
                  <Image src={taxonImageURL} wrapped style={{height: 200}}/>
                  <Header>
                    <h4>
                        <TextTruncate
                            line={1}
                            truncateText="…"
                            text={taxon.attributes.name}
                        />
                      </h4>
                  </Header>
                </Container>
              )
            }
            return null
          }
        })
      )
    }
  }

const CategoriesList = ({categories}) => {
    const settings = { 
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: false,
      initialSlide: 0,
      dotsClass: "slick-dots slick-thumb",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            //dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            //dots: false
          }
        }
      ]
    };
   
    return (
        <Slider {...settings}>
            {productsItems(categories)}
        </Slider>
    )
    
} 

export default CategoriesList