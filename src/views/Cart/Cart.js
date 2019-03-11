import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    Container,
    Icon
} from 'semantic-ui-react'
import {ShoppingCart} from 'react-feather'

import Header from '../Common/Header'
import Footer from '../Common/Footer'
import CategoriesList from '../Common/CategoriesList'
import ItemList from './Sections/ItemList'
import Adjustments from './Sections/Adjustments'
import { getOrder } from '../../redux/actions'

class Cart extends Component {
    
    componentWillMount(){
        this.props.getOrder()
    }
    
    render() {
        const { cart, taxonomies, order } = this.props
        
        if (taxonomies.isFetching) {
            return null
        }
        
        if (cart.line_items.length == 0){
            return(
                <div>
                <Header />
                     {/*<Container>*/}
                        <Container style={{textAlign: 'center'}}>
                            <ShoppingCart size={200} color='black' />
                            <h3>Esta muy vacio aqui, porque no agregas algunos productos:</h3>
                            {/*<Button
                                transparent
                                primary
                                block 
                                large 
                                onClick={}
                            >*/}
                            <Container textAlign='center'>
                                <h2>Categorías</h2>
                                <div>
                                  <CategoriesList categories={taxonomies.taxonomies} />
                                </div>
                             </Container>
                            {/*</Button>*/}
                        </Container>
                     {/*</Container>*/}
                <Footer />
            </div>
            )
        }
        
        return (
            <div>
                <Header />
                    <Container style={{ padding: '2em 2em' }} textAlign='center' vertical>
                        {/*<PageBreadcrumb textAlign='left'/>*/}
                        <h1 style={{textAlign: 'left'}}>Carrito de Compra</h1>
                        <ItemList items={cart.line_items} />
                        <Adjustments order={order}/>
                    </Container>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { cart, taxonomies, order } = state
    return { cart, taxonomies, order }
}

export default connect(mapStateToProps, {getOrder})(Cart)