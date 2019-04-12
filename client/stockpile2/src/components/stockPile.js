import React, { Component } from 'react';

import requireAuth from './requireAuth';
import AddFood from './addFood';
import FoodList from './foodList';
import Pot from './pot';
import RecipeList from './recipes';
import FavoritesList from './favoriteRecipes'

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
            <br />
            <br />
            <RecipeList />
            <br />
            <br />
            <FavoritesList />
          </div>
        );
    }
};

export default requireAuth(StockPile);
