import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import logo from '../assets/images/logo_transparent.png';
import {Navbar,Nav} from "react-bootstrap";


class Header extends Component {
    renderLinks(){
        if(this.props.authenticated){
            return (
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                  Welcome
                </Nav.Link>
                <Nav.Link as={Link} to="/stockpile">
                  StockPile
                </Nav.Link>
                <Nav.Link as={Link} to="/signout">
                  Sign Out
                </Nav.Link>
              </Nav>
            );
        } else{
            return (
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                  Welcome
                </Nav.Link>
                <Nav.Link as={Link} to="/signin">
                  Sign In
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
              </Nav>
            );
        }

    }
    render(){
        return (
          <Navbar bg="success" variant="dark">
            <Navbar.Brand>
              <img
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="StockPile"
              />
            </Navbar.Brand>
            
              {this.renderLinks()}
           
          </Navbar>
        );
    }
}







function mapStateToProps(state){
    return{authenticated: state.auth.authenticated}
}

export default connect(mapStateToProps)(Header)

