import React from "react"
import TextTruncate from 'react-text-truncate'

// react component for creating beautiful carousel
import Slider from "react-slick"


import {
  Image,
  Container,
  Header
} from 'semantic-ui-react'

const productsItems =  (products) => {
    if (products.products === undefined) {
    } else{
      return (
        products.products.map((product, key) => {
          return (
              <Container href={"/product/" + product.slug}>
                <Image src={product.master.images[0].product_url} centered wrapped style={{height: 250}}/>
                <Header>
                  <h4>
                      <TextTruncate
                          line={1}
                          truncateText="…"
                          text={product.name}
                      />
                    </h4>
                </Header>
                <Header style={{ padding: '0em 0em 2em 0em' }}>
                  <h3>
                    {product.master.display_price}
                  </h3>
                </Header>
              </Container>
            )
          
        })
      )
    }
  }

const ProductList = ({products}) => {
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
    console.log("props", products)
    return (
        <Slider {...settings}>
            {productsItems(products)}
        </Slider>
    )
    
} 

export default ProductList