import React from "react";
//Redux
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { latestProductsFetch } from '../../../redux/actions';

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
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/Button";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";
import { Refresh } from '@material-ui/icons';

import compose from 'recompose/compose';
import teamStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

class LatestProducts extends React.Component {
  
  componentWillMount() {
        this.props.latestProductsFetch();
    }

  productsItems (products, classes, imageClasses) {
    if (products.products === undefined) {
     //console.log("Indefinido")
    } else{
      return (
        products.products.map((product, key) => {
          return (
              <ButtonBase
                  component={Link} 
                  to={"/product/" + product.id}
                  key={key}
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
    //console.log(this.props)
    if (this.props.isFetching){
        return (
            <div className={classes.section}>
              <h2 className={classes.title}>Latest Products</h2>
              <div>
                <CircularProgress className={classes.progress} style={{ color: "black" }} />
              </div>
            </div>
        )
    }
    if (this.props.error){
        return (
            <div className={classes.section}>
              <h2 className={classes.title}>Latest Products</h2>
              <div>
                <p style={{ color: "black" }}>Oh no! Hay un problema</p>
                <Button 
                  color="primary"
                  className={classes.button}
                  onClick={()=>{this.props.latestProductsFetch()}}
              >
                  <Refresh style={{fontSize: 50}} />
              </Button>
              </div> 
            </div>
        );
    }
    
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Latest Products</h2>
        <div>
          <Slider {...settings}>
            {this.productsItems(this.props.products, classes, imageClasses)}
          </Slider>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return state.productsList;
};

export default compose(
  withStyles(teamStyle),
  connect(mapStateToProps, { latestProductsFetch })
)(LatestProducts);