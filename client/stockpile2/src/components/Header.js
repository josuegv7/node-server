import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <div>
                <Link to="/">Welcome</Link>
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/signout">Sign Out</Link>
                <Link to="/stockpile">StockPile</Link>
            </div>
        )
    }
}

export default Header

