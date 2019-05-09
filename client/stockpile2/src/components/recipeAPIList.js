import React, { Component } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import APIRecipeImage from '../assets/images/002-search.png';
import RecipeList from './recipes';
import Image from 'react-bootstrap/Image';
import '../assets/css/custom.css';

class RecListAPI extends Component {
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
                <Image className="RecipeListAPI" src={APIRecipeImage} fluid onClick={() => this.setState({ open: !open })}
                    aria-controls="example-collapse-text"
                    aria-expanded={open} />

                <Collapse in={this.state.open}>
                    <div id="example-collapse-text">
                        <RecipeList />
                    </div>
                </Collapse>
            </div>
        );
    }
}


export default RecListAPI; 