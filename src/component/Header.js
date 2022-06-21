import React, { Component } from 'react';
import {Navbar, NavbarBrand, NavbarToggler, NavItem, Nav, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,UncontrolledDropdown  } from 'reactstrap';
import Footer from './Footer';
import {NavLink, Link} from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
     
    }
    render() {
        return (
            <div>
                <Navbar color='light' expand='md'>
                    <NavbarBrand href="/">
                        <img src='assets/images/123.jpg' width="50" height="50" alt="logo shown" className="d-inline-block align-top" />
                    </NavbarBrand> {' '}
                    人有多大膽，地有多大產。
                </Navbar>
                    <img src='assets/images/2.jpg' />
                    <h1>Welcome to the Dogfry stock </h1>
                    <h1>歡迎來到 百萬大道</h1>
                    <p>We are here providing the goodest stocks recommendation to you</p>
                    <Navbar color = 'blue' expand = 'md'>
                        <NavbarBrand><Link to = '/Main'>Main page</Link></NavbarBrand>
                        <NavbarToggler></NavbarToggler>
                        <Nav className = 'mr-auto' >
                            <NavItem>
                                <NavLink className = 'nav-link' to = '/Footer'>Footer/News</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className = 'nav-link'to = '/Contact'>Contact</NavLink>
                            </NavItem>
                            
                            <UncontrolledDropdown >
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
                        </Nav>
                    </Navbar>
            </div>
        );
    }
}

export default Header;
