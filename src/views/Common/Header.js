import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import FixedMenu from './FixedMenu'

import CartLink from './CartLink'
//import Breadcrum from './Breadcrum';

export default class Header extends Component {
    render() {
        //console.log(this.props.pathname);

        return(
            <div>
                <FixedMenu />
                <Container style={{alignItems: 'right'}}>
                    <Grid>
                        <Grid.Column floated='right' width={1}>
                            <CartLink />
                        </Grid.Column>
                    </Grid>
                </Container>
                {/* <Breadcrum /> */}
            </div>
        )
    }
}