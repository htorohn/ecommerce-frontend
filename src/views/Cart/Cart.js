import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    Container
} from 'semantic-ui-react'

import Header from '../Common/Header'
import Footer from '../Common/Footer'
import ItemList from './Sections/ItemList'

class Cart extends Component {
    render() {
        const { cart } = this.props
        return (
            <div>
                <Header />
                    <Container style={{ padding: '2em 2em' }} textAlign='center' vertical>
                        {/*<PageBreadcrumb textAlign='left'/>*/}
                        <ItemList items={cart.line_items} />
                        
                    </Container>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { cart } = state
    return { cart }
}

export default connect(mapStateToProps, null)(Cart)