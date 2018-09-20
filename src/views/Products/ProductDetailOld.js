import React from "react"

// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// core components
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
//import GridContainer from "../../components/Grid/GridContainer"
//import GridItem from "../../components/Grid/GridItem"
import HeaderLinks from "../../components/Header/HeaderLinks"
import Parallax from "../../components/Parallax"

import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage.jsx"

// Sections for this page
import MainProduct from "./Sections/MainProduct"


const dashboardRoutes = []

class ProductDetail extends React.Component {
  
  
  
  render() {
    const { classes, ...rest } = this.props;
    //console.log(this.props)
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />

        <Parallax xsmall filter image={require("../../assets/img/hero-image.jpg")}>
          {/*<div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>{current_product.name}</h1>
              </GridItem>
            </GridContainer>
          </div>*/}
        </Parallax>
        
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <MainProduct id={this.props.match.params.id}/>
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}

export default withStyles(landingPageStyle)(ProductDetail);
