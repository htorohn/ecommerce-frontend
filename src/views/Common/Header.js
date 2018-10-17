import React, { Component } from 'react'
import { Container, Grid, Responsive, Input } from 'semantic-ui-react'
import FixedMenu from './FixedMenu'

import CartLink from './CartLink'
//import Breadcrum from './Breadcrum';

export default class Header extends Component {
    
    
    
    render() {
        //console.log(this.props.pathname);

        return(
            <Container>
                
                <Responsive {...Responsive.onlyMobile}>
                    <FixedMenu />
                </Responsive>
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    <Container style={{paddingTop: 20, alignItems: 'right'}}>
                        <Grid>
                            <Grid.Column floated='left' width={4}>
                                <Input transparent fluid icon={{ name: 'search', link: true }} placeholder='Buscar...' />
                            </Grid.Column>
                            <Grid.Column floated='right' width={1}>
                                <CartLink responsive='computer'/>
                            </Grid.Column>
                        </Grid>
                    </Container>
                    <FixedMenu />
                    
                </Responsive>
                
                {/* <Breadcrum /> */}
            </Container>
        )
    }
}