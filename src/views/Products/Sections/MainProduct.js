import React, { Component } from 'react'
//import { dispatch } from 'redux'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { getProduct, setMainImage } from '../../../redux/actions'
//import classNames from "classnames";
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from '../../../components/Grid/GridContainer'
import GridItem from '../../../components/Grid/GridItem'
import { Refresh } from '@material-ui/icons'
import Button from '../../../components/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import teamStyle from '../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx'
import classNames from "classnames"

//product components
import MainImage from './MainImage'
import Thumbnails from './Thumbnails'

import './zoom.css'

class MainProduct extends Component {
    
    componentWillMount() {
        //console.log(this.props)
        this.props.getProduct(this.props.id)
    }
  
    render(){
        const { classes, productImage } = this.props
        const { current_product } = this.props.productsList
        
        console.log("props", this.props)
        //console.log("props", this.props)
        if (this.props.productsList.productFetching){
        return (
            <div className={classes.section}>
              {/*<h2 className={classes.title}>Latest Products</h2>*/}
              <div>
                <CircularProgress className={classes.progress} style={{ color: "black" }} />
              </div>
            </div>
        )
        }
        if (this.props.productsList.productError){
            return (
                <div className={classes.section}>
                  {/*<h2 className={classes.title}>Latest Products</h2>*/}
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
        console.log("product image", productImage)
        let image = {}
        if (productImage.current_image.product_url === undefined ){
            image=current_product.master.images[0]
        } else {
            image = productImage.current_image
        }
        
        return (
            <div className={classes.section}>
                
                <div className={classes.container}>
                    <GridContainer justify="center">
                        {/*<div className="fluid">*/}
                        <GridItem xs={12} sm={12} md={6}>
                            <div>
                                        <MainImage 
                                            image={image} 
                                            classes={classes}
                                        />
                            </div>

                            <div className={classes.container}>
                                        <Thumbnails 
                                            images={current_product.master.images} 
                                            classes={classes}
                                        />
                            </div>
                        {/*</div>*/}
                        {/*</div>*/}
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6} >
                        {/*<div className="fluid__instructions">*/}
                            <h2 className={classes.title}>{current_product.name}</h2>
                        {/*</div>*/}
                        
                        
                        
                        </GridItem>
                        {/*</div>*/}
                    </GridContainer>
                </div>
                
                
                
            </div>
            )
    }
}

const mapStateToProps = state => {
    //console.log("state", state)
    const { productsList, productImage } = state
    //return { current_product }
    return { productsList, productImage }
};

export default compose(
  withStyles(teamStyle),
  connect(mapStateToProps, { getProduct, setMainImage })
)(MainProduct);