import React from 'react'
import { connect } from 'react-redux'

import {Dimmer, Loader, Container} from 'semantic-ui-react'
import { getTaxonProducts } from '../../../redux/actions'
import ProductList from '../../Common/ProductList'

class RelatedProducts extends React.Component {
    componentWillMount() {
        this.props.getTaxonProducts(this.props.taxonId)
    }
    
    render() {
        return(
            <ProductList products={this.props.productsList.products} />    
        )
    }
}

const mapStateToProps = state => {
    const { productsList } = state
    return { productsList }
}

export default connect(mapStateToProps, { getTaxonProducts })(RelatedProducts)