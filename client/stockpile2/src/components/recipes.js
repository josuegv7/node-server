import React, { Component } from "react";
import { compose ,bindActionCreators} from "redux";
import { connect } from "react-redux";
import {recipeToFavorite, fetchFavoriteRecipesList} from "../Actions";

class RecipeList extends Component {
  // constructor() {
  //   super();
  //   // This binding is necessary to make `this` work in the callback
  //   this.addtoFavorites = this.addtoFavorites.bind(this);
  // }

  addtoFavorites = (event) => {
     // event.preventDefault();
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
      <div>
      <div key={recipeData.id}>
              <div>
                <img
                  src= {recipeImage}
                  alt="FoodPic"
                />
                <h4> {recipeName} </h4>
                <div>
                  <h3>Ingredients</h3>
                </div>
                <ul>
                  {recipeIngredients}
                </ul>
                <h6>
                  <a href={recipeURL}>
                    Recipe
                  </a>
                </h6>
              </div>
            </div>
            <button
            data-value={recipeJSONData}
            onClick={this.addtoFavorites.bind(this)}
            >
              Fav
            </button>
          </div>
          );

  }

  render() {
    return (
      <div>
        <h2 className="">Recipes</h2>
        <div className="">{this.props.recipes.map(this.renderRecipe,this)}</div>
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
