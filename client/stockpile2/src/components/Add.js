import React, { Component } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import AddImage from '../assets/images/001-adding.png'
import AddFood from './addFood';
import Image from 'react-bootstrap/Image';
import '../assets/css/custom.css';

class Add extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
        };
    }

    render() {
        const { open } = this.state;
        return (
            <div style={{ width: "12rem" }}>
                <h3>Add</h3>
                <Image className="addImage" src={AddImage} fluid onClick={() => this.setState({ open: !open })}
                    aria-controls="example-collapse-text"
                    aria-expanded={open} />

                <Collapse in={this.state.open}>
                    <div id="example-collapse-text">
                        <AddFood />
                    </div>
                </Collapse>
            </div>
        );
    }
}


export default Add; 