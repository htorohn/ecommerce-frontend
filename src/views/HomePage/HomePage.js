import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Segment,
  Visibility,
  Responsive,
  Grid,
  Input
} from 'semantic-ui-react'
import LatestProducts from './Sections/LatestProducts'
import CategoriesHome from './Sections/CategoriesHome'
import FixedMenu from '../Common/FixedMenu'
import Footer from '../Common/Footer'
import CartLink from '../Common/CartLink'

export default class HomepageLayout extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state
    //console.log(this.props.location.pathname)
    return (

      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ 
                minHeight: 700, 
                padding: '1em 0em', 
                backgroundImage: "url('/images/hero-image.jpg')", 
                backgroundSize: "cover", 
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"  
            }}
            vertical
            
          >

            <Container>
              {/*<Menu stackable inverted pointing secondary size='large' style={{ border: 0 }}>
                <Menu.Item active>
                  <NavLink to="/" exact activeClassName="active">Home</NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to="/events" activeClassName="active">Events</NavLink>
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>Log in</Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
              </Menu>*/}
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
            </Container>

            {/*<Container text>
              <Header
                as='h1'
                content='Sports Events'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='Do whatever you want when you want to.'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button primary size='huge'>
                Get Started
                <Icon name='right arrow' />
              </Button>
            </Container>*/}
          </Segment>
        </Visibility>
        
        <Segment style={{ padding: '8em 2em' }} textAlign='center' vertical>
          <CategoriesHome />
        </Segment>
        <Segment style={{ padding: '8em 2em' }} textAlign='center' vertical>
          <LatestProducts />
        </Segment>

        <Footer />
      </div>
    )
  }
}