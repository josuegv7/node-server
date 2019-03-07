import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Box,Button,Heading} from "grommet";

import {AddCircle, Restaurant } from "grommet-icons";

const AppBar = (props) => (
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}
        {...props}
    />
);


class Header extends Component {
    render() {
        // const { showSidebar, showTopbar, value } = this.state;
        return (
            <AppBar>
                <Link to="/">
                    <Heading level="3" margin="none">
                        StockPile2
                    </Heading>
                </Link>
                <Link to="/signup">
                    <Heading level="3" margin="none">
                        Sign Up
                    </Heading>
                </Link>
                <Link to="/signin">
                    <Heading level="3" margin="none">
                        Sign In
                    </Heading>
                </Link>
                <Link to="/logout">
                    <Heading level="3" margin="none">
                        Log Out
                    </Heading>
                </Link>
                <Link to="/mystock">
                    <Heading level="3" margin="none">
                        My Stock
                    </Heading>
                </Link>
                <Button
                    icon={<AddCircle size="large" />}
                    onClick={() =>
                        this.setState(prevState => ({
                            showTopbar: !prevState.showTopbar
                        }))
                    }
                />
                <Button
                    icon={<Restaurant size="large" />}
                    onClick={() =>
                        this.setState(prevState => ({
                            showSidebar: !prevState.showSidebar
                        }))
                    }
                />
            </AppBar>
        )
    }
}
export default Header;