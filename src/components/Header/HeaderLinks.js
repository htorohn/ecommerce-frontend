/*eslint-disable*/
import React, { Component } from "react";
import { connect } from 'react-redux';
import { taxonomiesFetch } from '../../redux/actions';
import compose from 'recompose/compose';
// react components for routing our app without refresh
import { Link } from "react-router-dom";


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown";
import Button from "../Button";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";

class HeaderLinks extends Component {
  
  
  componentWillMount() {
    this.props.taxonomiesFetch();
  }
  
  taxonomiesMenu(taxonomies, classes) {
    //console.log('Taxonomies', taxonomies)
    if (taxonomies.count === undefined){
      return <div />
    } else {
      return (taxonomies.taxonomies.map((taxonomy, key) => {
            return (
              <ListItem className={classes.listItem} key={key}>
                <CustomDropdown
                  noLiPadding
                  buttonText={taxonomy.name}
                  buttonProps={{
                    className: classes.navLink,
                    color: "transparent"
                  }}
                  buttonIcon={Apps}
                  dropdownList={
                    taxonomy.root.taxons.map((taxon, key) => {
                        return (
                          <Link to="/" className={classes.dropdownLink} key={key}>
                            {taxon.name}
                          </Link>
                        )
                      }
                    )
                  }
                />
              </ListItem>
            )
          }
        )
      )
    }
  }
  
  render() {
    const { classes } = this.props;
    //console.log('props', this.props)
    return (
      <List className={classes.list}>
        { this.taxonomiesMenu(this.props.taxonomies, classes) }
        
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="Follow us on twitter"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="https://twitter.com/CreativeTim"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-twitter"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="Follow us on facebook"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.facebook.com/CreativeTim"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-facebook"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title="Follow us on instagram"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.instagram.com/CreativeTimOfficial"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.icons + " fas fa-shopping-cart"} />
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    );
  }
}

const mapStateToProps = state => {
    
    //console.log('stae', state)
    return state.taxonomies;
};

//export default withStyles(headerLinksStyle)(HeaderLinks);
export default compose(
  withStyles(headerLinksStyle),
  connect(mapStateToProps, { taxonomiesFetch })
)(HeaderLinks);