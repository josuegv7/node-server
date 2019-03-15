import React, { Component } from 'react';

import requireAuth from './requireAuth';
import AddFood from './addFood';
import FoodList from "./foodList";

class StockPile extends Component {
    render(){
        return(
            <div>
                <h1>StockPile</h1>
                <AddFood/>
                <br></br>
                <br></br>
                <FoodList/>
            </div>
        )
    }
};

export default requireAuth(StockPile);


