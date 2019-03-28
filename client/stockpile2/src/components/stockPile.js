import React, { Component } from 'react';

import requireAuth from './requireAuth';
import AddFood from './addFood';
import FoodList from './foodList';
import Pot from './pot';

class StockPile extends Component {
    render(){
        return (
          <div>
            <h1>StockPile</h1>
            <AddFood />
            <br />
            <br />
            <FoodList />
            <br />
            <br />
            <Pot/>
          </div>
        );
    }
};

export default requireAuth(StockPile);


