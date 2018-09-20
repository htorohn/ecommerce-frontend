import React from "react"
//Redux
import { connect } from 'react-redux'
import { latestProductsFetch } from '../../../redux/actions'
import ProductList from '../../Common/ProductList'

import {
  Container,
  Dimmer,
  Loader,
  Button,
  Icon
} from 'semantic-ui-react'


class LatestProducts extends React.Component {
  
  componentWillMount() {
        this.props.latestProductsFetch();
    }
  
  render() {
    //console.log(this.props)
    if (this.props.isFetching){
        return (
            <Container>
                <Dimmer active inverted>
                    <Loader size='big' inverted>Loading</Loader>
                </Dimmer>
            </Container>
        )
    }
    if (this.props.error){
        return (
            <Container>
              <h2>Latest Products</h2>
              <div>
                <p style={{ color: "black" }}>Oh no! Hay un problema</p>
                <Button 
                  color="primary"
                  icon
                  onClick={()=>{this.props.latestProductsFetch()}}
                  
                >
                  <Icon name="refresh" textAlign='center'/>
              </Button>
              </div> 
            </Container>
        );
    }
    
    return (
      //{/*<Segment textAlign='center'>*/}
      <Container textAlign='center'>
        <h2>Latest Products</h2>
        <div>
          <ProductList products={this.props.products} />
        </div>
      </Container>
      //{/*</Segment>*/}
    );
  }
}

const mapStateToProps = state => {
    return state.productsList;
};

export default connect(mapStateToProps, { latestProductsFetch })(LatestProducts);