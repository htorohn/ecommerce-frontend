import React, { Component } from 'react';
import FixedMenu from './FixedMenu';
//import Breadcrum from './Breadcrum';

export default class Header extends Component {
    render() {
        //console.log(this.props.pathname);

        return(
            <div>
                <FixedMenu />
                {/* <Breadcrum /> */}
            </div>
        )
    }
}