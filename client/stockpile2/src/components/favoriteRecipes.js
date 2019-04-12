import _ from "lodash";
import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../Actions";

class FavoritRecipeList extends Component {
  componentDidMount() {
    this.props.fetchFavoriteRecipesList();
  }

  onDeleteRecipeClick = ev => {
    const val = ev.target.dataset.value;
    console.log("Recipe Id:", val)
    this.props.deleteRecipe(val);
    this.props.fetchFavoriteRecipesList();
  };

  displayFavoriteRecipes() {
    return _.map(this.props.favorites, favorite => {
      return (
        <tr key={favorite.recipceID}>
          <td
            // onClick={this.addIngredientToPot.bind(this)}
            data-value={favorite.name}
          >
            {favorite.name}
          </td>
          <td>
            <img src={favorite.recipeImage} alt="FoodPic" />
          </td>
          <td>{favorite.recipeURL}</td>
          <td>{favorite.created_at}</td>
          <td>
            <button
              data-value={favorite._id}
              onClick={this.onDeleteRecipeClick.bind(this)}
            >
              Remove
            </button>
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <div />
          </div>
          <div>
            <div>
              <h2>My Favorites </h2>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>URL</th>
                    <th>Date Added</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>{this.displayFavoriteRecipes()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites
  };
}
export default compose(
  connect(
    mapStateToProps,
    actions
  )
)(FavoritRecipeList);
