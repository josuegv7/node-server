import React, { Component } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import RecipeImage from '../assets/images/001-recipe-book.png';
import FavoriteRecipes from './favoriteRecipes';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../assets/css/custom.css';

class FavRecList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
        };
    }

    render() {
        const { open } = this.state;
        return (
            <div style={{ width: "23rem" }}>
                <Row>
                    <Col>
                        <h3>Favorite Recipes:</h3>
                    </Col>
                    <Col>
                        <Image className="favRecipeList" src={RecipeImage} fluid onClick={() => this.setState({ open: !open })}
                            aria-controls="example-collapse-text"
                            aria-expanded={open} />
                        <Collapse in={this.state.open}>
                            <div id="example-collapse-text">
                                <FavoriteRecipes />
                            </div>
                        </Collapse>
                    </Col>
                </Row>
            </div>
        );
    }
}


export default FavRecList; 