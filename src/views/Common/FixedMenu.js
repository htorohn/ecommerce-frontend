import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Menu,
  Container,
  Button
} from 'semantic-ui-react';

export default class FixedMenu extends Component {
    
  render (){
    return (
      <Menu  stackable fixed='top' size='large'>
        <Container>
          {/* <Menu.Item as='a' active>Home</Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item> */}
          <Menu.Item>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
          </Menu.Item>
          <Menu.Item active>
            <NavLink to="/events" activeClassName="active">Events</NavLink>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item className='item'>
              <Button as='a'>Log in</Button>
            </Menu.Item>
            <Menu.Item>
              <Button as='a' primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}