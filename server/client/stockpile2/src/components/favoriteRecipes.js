import _ from "lodash";
import React, { Component } from "react";
import Moment from "react-moment";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../Actions";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import RecipeBookIcon from '../assets/images/002-recipe.png'
import '../assets/css/custom.css';
class FavoritRecipeList extends Component {
  componentDidMount() {
    this.props.fetchFavoriteRecipesList();
  }

  onDeleteRecipeClick = ev => {
    const val = ev.target.dataset.value;
    this.props.deleteRecipe(val);
    this.props.fetchFavoriteRecipesList();
  };

  displayFavoriteRecipes() {
    return _.map(this.props.favorites, favorite => {
      return (
        <tr key={favorite._id}>
          <style type="text/css">
            {`
                .table {
                font-size: 12px;
                text-align: center;  
                };
                .btn-danger{
                    background-color: #D12D0A   ;
                    color: white;
                    font-size: 10px;
                }
            `}
          </style>
          <td
            data-value={favorite.name}
          >
            {favorite.name}
          </td>
          <td>
            <img src={favorite.recipeImage} alt="FoodPic" />
          </td>
          <td><a href={favorite.recipeURL}>Recipe</a></td>
          <td>
            <Moment format="MMM D YY">{favorite.created_at}</Moment>
          </td>
          <td>
            <Button
              data-value={favorite._id}
              onClick={this.onDeleteRecipeClick.bind(this)}
              size="sm"
              variant="danger"
            >
              Remove
            </Button>
          </td>
        </tr>
      );
    });
  }
  render() {
    if (Object.keys(this.props.favorites).length !== 0){
      return this.renderFavoriteRecipes();
    } else{
    return this.renderEmptyRecipes();
    }
  }

  renderFavoriteRecipes(){
    return(
    <Container>
      <Table striped bordered hover size="sm" responsive>
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
      </Table>
    </Container>
    )
  }
  renderEmptyRecipes(){
    return (<div><img className="recipeBookImage" src={RecipeBookIcon} alt='Recipe Book' /></div>)
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
