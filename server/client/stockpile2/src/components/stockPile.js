import React, { Component } from 'react';

import requireAuth from './requireAuth';
import Frig from './Frig';
import Add from './Add';
import Pot from './pot';
import RecListAPI from './recipeAPIList';
import FavRecList from './FavoriteRecipeList';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class StockPile extends Component {
  render() {
    return (
      <Container>
        <h2>StockPile2</h2>
        <Row mb= {2}>
          <Col xs={10} md={8}>
        <Row>
          <Col xs={12} md="auto">
            <Frig />
          </Col>
          <Col xs={12} md="auto">
            <Add />
          </Col>
        </Row>
    
        <Row>
          <Col xs={6} md={4} className="mx-auto">
            <Pot />
          </Col>
              <Col xs={12} md={8}>
            <RecListAPI />
          </Col>
        </Row>
        </Col>
          <Col xs={6} md={4}>
          <FavRecList />
        </Col>
        </Row>
      </Container>
    );
  }
};

export default requireAuth(StockPile);
