import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    Segment,
    Dimmer,
    Loader,
    Button,
    Icon,
} from 'semantic-ui-react'

import Header from '../Common/Header'
import Footer from '../Common/Footer'
import MainProduct from './Sections/MainProduct'
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
        
        
        return (
            <div>
                <Header />
                <Segment style={{ padding: '8em 2em' }} textAlign='center' vertical>
                    <MainProduct current_product={this.props.productsList.current_product}/>
                </Segment>
                <Footer />
            </div>
        )
    }
} 

const mapStateToProps = state => {
    //console.log("state", state)
    const { productsList } = state
    //return { current_product }
    return { productsList }
}

export default connect(mapStateToProps, { getProduct})(ProductDetail)