import React, { Component } from "react";
import { connect } from "react-redux";
import { recipeToFavorite } from '../Actions/index.js'


class RecipeList extends Component {

   addtoFavorites = (ev) => {
    const val = ev.target.dataset.value;
    this.props.recipeToFavorite(val);
    console.log(val)

    // var handleClick = (e) => {
    //     console.log(e.target.value);
    // }

}



  renderRecipe(recipeData) {
    let recipeName = recipeData.recipeName;
    let recipeId = recipeData.id;
    let recipeIngredients = recipeData.ingredients.join(", ");
    let recipeURL = "https://www.yummly.com/recipe/" + recipeData.id;
    let recipeImage = recipeData.smallImageUrls;
    var recipeDataObj = { name:recipeName, recipeID:recipeId, recipeImage:recipeImage, recipeURL: recipeURL }

    return (
      <div>
      <div className="col-lg-4 col-md-6 mb-4" key={recipeData.id}>
              <div className="card h-100">
                <img
                  src= {recipeImage}
                  alt="FoodPic"
                />
                <h4 className="card-title"> {recipeName} </h4>
                <div>
                  <h3 className="active">Ingredients</h3>
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
              onClick={this.addtoFavorites.bind(this)}
              data-value={recipeDataObj}
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
        <div className="">{this.props.recipes.map(this.renderRecipe)}</div>
      </div>
    );
  }
}

function mapStateToProps({ recipes }) {
//console.log("List Recipes", recipes)
  return {
    recipes
  };
}
export default connect(mapStateToProps)(RecipeList);
