import _ from "lodash";
import React, { Component } from "react"
import { Link } from 'react-router-dom'
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
  Grid
} from "semantic-ui-react";

import CartLink from './CartLink'

const NavBarMobile = ({
  children,
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      items={leftItems}
      vertical
      visible={visible}
    />
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "10vh" }}
    >
      <Menu secondary>
        <Menu.Item>
          <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        {/*<Menu.Menu position="right">
          {_.map(rightItems, item => <Menu.Item {...item} />)}
        </Menu.Menu>*/}
        {rightItems}
         <Menu.Menu position="right">
           <Menu.Item name='cart'>
             <CartLink responsive='mobile'/>
           </Menu.Item>
         </Menu.Menu>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = ({ leftItems, rightItems }) => (
  
    <Grid columns={3}>

        <Grid.Column>
        <Menu secondary>
          {_.map(leftItems, item => <Menu.Item {...item} />)}
          </Menu>
        </Grid.Column>
        <Grid.Column>
          
            <Image centered size="mini" src="https://react.semantic-ui.com/logo.png" />
          
        </Grid.Column>
      {/*<Menu.Menu position="right">
        {_.map(rightItems, item => <Menu.Item {...item} />)}
      </Menu.Menu>*/}
      <Grid.Column>
      <Menu secondary>
        <Menu.Menu position="right">
        {_.map(rightItems, item => <Menu.Item {...item} />)}
        </Menu.Menu>
        </Menu>
      </Grid.Column>

    </Grid>
  
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

class NavBar extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, leftItems, rightItems } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}

const leftItems = [
  { as: "a", content: "Home", key: "home" },
  { as: "a", content: "Users", key: "users" }
];
const rightItems = [
  { as: "a", content: "Login", key: "login" },
  { as: "a", content: "Register", key: "register" }
];

//const rightItems = null
    // <Menu.Menu position="right">
    //   <Menu.Item name='cart'>
    //     <CartLink />
    //   </Menu.Item>
    // </Menu.Menu>

const FixedMenu = () => (
  <NavBar leftItems={leftItems} rightItems={rightItems} />
);

export default FixedMenu