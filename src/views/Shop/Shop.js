import React from 'react'
import { connect } from 'react-redux'

import {
    Container,
    Divider,
    Grid,
    Segment,
    Dimmer,
    Loader,
    Button,
    Icon
} from 'semantic-ui-react'

import TaxonomiesMenu from '../Common/TaxonomiesMenu'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import PageBreadcrumb from '../Common/PageBreadcrumb'
import ProductGrid from '../Common/ProductGrid'

//import { getTaxonProducts } from '../../redux/actions'

class Shop extends React.Component {
    
    // componentWillReceiveProps() {
    //     console.log("taxonomies", this.props.taxonomies)
    // }
    
    render() {
        //console.log("state", this.props.productsList)
        const { taxonomies, productsList } = this.props
        console.log("taxonomies", taxonomies)
        if ( taxonomies.isFetching ) {
            return(
                <div>
                    <Header />
                    <Segment style={{ padding: '8em 2em' }} textAlign='center' vertical>
                        <Dimmer active inverted>
                            <Loader size='big' inverted>Loading</Loader>
                        </Dimmer>
                    </Segment>
                    <Footer />
                </div>
            )   
        }
        
        const current_taxon = taxonomies.taxonomies.taxons.find((taxon) => taxon.permalink === this.props.match.params.taxon)
        console.log("current taxon", current_taxon)
        
        return(
             <div>
                <Header />
                <Container style={{ padding: '2em 2em' }} textAlign='center' vertical>
                    <PageBreadcrumb textAlign='left'/>
                    <Divider style={{ padding: '3em 0em' }} />
                    
                    <Grid container columns={2} stackable>
                        <Grid.Column width={3}>
                            <TaxonomiesMenu activePermalink={this.props.match.params.taxon}/>
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <ProductGrid current_taxon_id={current_taxon.id} />
                        </Grid.Column>
                    </Grid>   
                    
                    
                </Container>
                
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { productsList, taxonomies } = state
    //return { current_product }
    return { productsList, taxonomies }
}

export default connect(mapStateToProps, null)(Shop)