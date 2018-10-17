import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    Icon,
    Text,
    Label
} from 'semantic-ui-react'
import {ShoppingCart} from 'react-feather'

class CartLink extends Component {
    render() {
        
        const { itemCount } = this.props.cart
        const right = this.props.responsive==='computer'?25:15
        return(
            <Link to='/cart'>
                <div>
                    {
                        itemCount > 0 
                        ?
                        <div style={{ position: 'absolute', right: right, top: 0, justifyContent: 'center', alignItems: 'center' }}>
                            <h4 style={{ color: 'black' }}>{itemCount}</h4>
                        </div>
                        : null
                    }
                    <ShoppingCart size={35} color='black' />
                </div>
            </Link>    
        )
    }
}

const mapStateToProps = (state) => {
    const { cart } = state
    return { cart }
}

export default connect(mapStateToProps, null)(CartLink)