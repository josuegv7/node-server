import React, { Component } from 'react';

import requireAuth from './requireAuth'
import AddFood from './addFood';

class StockPile extends Component {
    render(){
        return(
            <div>
                <h1>STockPile</h1>
                <AddFood/>

            </div>
        )
    }
};

export default requireAuth(StockPile);


