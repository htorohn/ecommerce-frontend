import React from "react"
import TextTruncate from 'react-text-truncate'

// react component for creating beautiful carousel
import Slider from "react-slick"


import {
  Image,
  Container,
  Header
} from 'semantic-ui-react'

const productsItems =  (categories) => {
     console.log("props", categories)
    if (categories.taxons === 0) {
    } else{
      return (
        categories.taxons.map((taxon, key) => {
          if(taxon.taxons.length === 0){
            return (
                <Container href={"/shop/" + taxon.permalink}>
                  {/*<Image src={taxon.master.images[0].product_url} centered wrapped style={{height: 250}}/>*/}
                  <Header>
                    <h4>
                        <TextTruncate
                            line={1}
                            truncateText="…"
                            text={taxon.name}
                        />
                      </h4>
                  </Header>
                  {/*<Header style={{ padding: '0em 0em 2em 0em' }}>
                    <h3>
                      {taxon.master.display_price}
                    </h3>
                  </Header>*/}
                </Container>
              )
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