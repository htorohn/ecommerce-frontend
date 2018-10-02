import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    Segment,
    Dimmer,
    Loader,
    Button,
    Icon,
    Divider,
    Container
} from 'semantic-ui-react'

import Header from '../Common/Header'
import Footer from '../Common/Footer'
import PageBreadcrumb from '../Common/PageBreadcrumb'
import MainProduct from './Sections/MainProduct'
import RelatedProducts from './Sections/RelatedProducts'
import { getProduct } from '../../redux/actions'


class ProductDetail extends Component {
    componentWillMount() {
        //console.log(this.props)
        this.props.getProduct(this.props.match.params.id)
    }
    
    
    render(){
        //console.log("props", this.props)
                //Cuando esta cargando mostramos un Loader
        if (this.props.productsList.productFetching){
            return (
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
        
        //Si no se cargo el producto, mostramos un error
        if (this.props.productsList.productError){
            return (
                <div>
                    <Header />
                        <Segment style={{ padding: '8em 2em' }} textAlign='center' vertical>
                            <h2>Latest Products</h2>
                            <div>
                                <p style={{ color: "black" }}>Oh no! Hay un problema</p>
                                <Button 
                                  color="primary"
                                  icon
                                  onClick={()=>{this.props.getProduct(this.props.match.params.id)}}
                                  
                                >
                                <Icon name="refresh" textAlign='center'/>
                                </Button>
                            </div> 
                        </Segment>
                    <Footer />
                </div>
            )
        }
        
        const { current_product } = this.props.productsList
        console.log("current product", current_product)
        console.log("taxonomies", this.props.taxonomies)
        return (
            <div>
                <Header />
                <Container style={{ padding: '2em 2em' }} textAlign='center' vertical>
                    <PageBreadcrumb textAlign='left'/>
                    <Divider style={{ padding: '3em 0em' }} />
                    <MainProduct current_product={current_product}/>
                    <Divider style={{ padding: '3em 0em' }} horizontal>Productos Relacionados</Divider>
                    <RelatedProducts taxonId={current_product.taxon_ids[0]} />
                </Container>
                <Footer />
            </div>
        )
    }
} 

const mapStateToProps = state => {
    //console.log("state", state)
    const { productsList, taxonomies } = state
    //return { current_product }
    return { productsList, taxonomies }
}

export default connect(mapStateToProps, { getProduct})(ProductDetail)