import React from "react";
//Redux
import { connect } from 'react-redux';
import { latestProductsFetch } from '../../../redux/actions';

//Lodash
import _ from 'lodash';

import TextTruncate from 'react-text-truncate';


// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ButtonBase from '@material-ui/core/ButtonBase';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';

// react component for creating beautiful carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/Button";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";

import compose from 'recompose/compose';
import teamStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";
//import carouselStyle from "../../../assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "circle", background: "black", fontColor: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }


class LatestProducts extends React.Component {
  
  componentWillMount() {
        this.props.latestProductsFetch();
    }
    
  handleProductClick(product){
    console.log(product)
    
  }
    
  productsItems (products, classes, imageClasses) {
    console.log(products)
    if (products.products === undefined) {
     //console.log("Indefinido")
    } else{
      //console.log(products.count)
      return (
        products.products.map((product) => {
          return (
              <ButtonBase
                  //className={props.classes.cardAction}
                  onClick={() => { this.handleProductClick(product)}}
              >
                
                <Card plain >
                  <CardBody>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={product.master.images[0].product_url} alt="..." className={imageClasses} />
                  </GridItem>
                  </CardBody>
                  <CardBody>
                    <Tooltip title={product.name}>
                      <h4 className={classes.cardTitle}>
                        <TextTruncate
                            line={1}
                            truncateText="…"
                            text={product.name}
                        />
                      </h4>
                    </Tooltip>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    <h3 className={classes.cardTitle}>
                      {product.master.display_price}
                    </h3>
                  </CardFooter>
                </Card>
                
              </ButtonBase>
            )
          
        })
      )
    }
  }
  
  
  
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      //classes.imgRaised,
      //classes.imgRoundedCircle,
      //classes.imgFluid,
      classes.imgCardTop
    );
    const settings = { 
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: false,
      initialSlide: 0,
      //nextArrow: <SampleNextArrow />,
      //prevArrow: <SamplePrevArrow />,
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
            slidesToScroll: 2
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
    };
    if (this.props.productsList.isFetching){
        return (
            <div className={classes.section}>
              <h2 className={classes.title}>Latest Products</h2>
              <div>
                <CircularProgress className={classes.progress} style={{ color: "black" }} />
              </div>
            </div>
        )
    }
    // if (this.props.productsList.error){
    //     return (
    //         <Container>
    //             <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
    //                 <Text>Hay un error</Text>
    //             </Content>
    //         </Container>
    //     );
    // }
    
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Latest Products</h2>
        <div>

                <Slider {...settings}>
          
            
                  {this.productsItems(this.props.productsList, classes, imageClasses)}
        
            
                </Slider>

            
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    
    //console.log(state)
    if (state.productsList.products) {
        const productsList = state.productsList.products;
        //console.log(productsList);
        return { productsList };
    }

    return state;
};

//export default withStyles(teamStyle)(LatestProducts);
export default compose(
  withStyles(teamStyle),
  connect(mapStateToProps, { latestProductsFetch })
)(LatestProducts);