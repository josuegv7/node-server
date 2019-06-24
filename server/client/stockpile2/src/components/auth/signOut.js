import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../Actions';

class Signout extends Component {
    componentDidMount(){
        this.props.signout();
    }
    render(){
    return <div>Stay hungry my friend </div>;
    }
}

export default connect(null, actions) (Signout);