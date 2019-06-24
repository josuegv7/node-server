import React, { Component } from "react";
import { compose ,bindActionCreators} from "redux";
import { connect } from "react-redux";
import {recipeToFavorite, fetchFavoriteRecipesList} from "../Actions";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


class RecipeList extends Component {

  addtoFavorites = (event) => {
     event.preventDefault();
     const val = event.target.dataset.value;
     this.props.recipeToFavorite(val);
     this.props.fetchFavoriteRecipesList();
 };

  renderRecipe(recipeData) {
    let recipeName = recipeData.recipeName;
    let recipeId = recipeData.id;
    let recipeIngredients = recipeData.ingredients.join(", ");
    let recipeURL = "https://www.yummly.com/recipe/" + recipeData.id;
    let recipeImage = recipeData.smallImageUrls;
    var recipeDataObj = { name:recipeName, recipeID:recipeId, recipeImage:recipeImage, recipeURL: recipeURL }
    var recipeJSONData = JSON.stringify(recipeDataObj)

    return (
      <tr key={recipeData.id}>
            <td>
             {recipeName} 
            </td>
            <td>                
              <img src={recipeImage} alt="FoodPic"/>
            </td>
            <td className="text">
              <span className="tableSpan">{recipeIngredients}</span>
            </td>
            <td>
              <a href={recipeURL}>
                    Recipe
              </a>
            </td>
            <td>
              <Button
              data-value={recipeJSONData}
              onClick={this.addtoFavorites.bind(this)}
              size="sm"
              variant="flat"
              >
                Fav
              </Button>
            </td>
          </tr>
          );

  }

  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Ingredients</th>
              <th>Recipe</th>
              <th>Add to Favorites</th>
            </tr>
          </thead>
          <tbody>
            {this.props.recipes.map(this.renderRecipe, this)}
          </tbody>
        </Table>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      { recipeToFavorite, fetchFavoriteRecipesList },
      dispatch
    );
}

function mapStateToProps({ recipes }) {
  return {
    recipes
  };
}
export default compose(connect(mapStateToProps,mapDispatchToProps))(RecipeList);
