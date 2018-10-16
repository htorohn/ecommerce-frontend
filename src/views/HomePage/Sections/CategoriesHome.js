import React from "react"
//Redux
import { connect } from 'react-redux'
import { latestProductsFetch } from '../../../redux/actions'
import CategoriesList from '../../Common/CategoriesList'

import {
  Container,
  Dimmer,
  Loader,
  Button,
  Icon
} from 'semantic-ui-react'


class CategoriesHome extends React.Component {
  
    // componentWillMount() {
    //     this.props.latestProductsFetch();
    // }
  
  render() {
    //console.log(this.props)
    const { taxonomies } = this.props
    console.log("categories home", taxonomies)
    if (taxonomies.isFetching){
        return (
            <Container>
                <Dimmer active inverted>
                    <Loader size='big' inverted>Loading</Loader>
                </Dimmer>
            </Container>
        )
    }
    if (taxonomies.error){
        return (
            <Container>
              <h2>Latest Products</h2>
              <div>
                <p style={{ color: "black" }}>Oh no! Hay un problema</p>
                <Button 
                  color="primary"
                  icon
                  //onClick={()=>{this.props.latestProductsFetch()}}
                  
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
        <h2>Categorías</h2>
        <div>
          <CategoriesList categories={taxonomies.taxonomies} />
        </div>
      </Container>
      //{/*</Segment>*/}
    );
  }
}

const mapStateToProps = state => {
    const { taxonomies } = state
    return { taxonomies };
};

export default connect(mapStateToProps, null )(CategoriesHome);