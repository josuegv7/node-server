import _ from "lodash";
import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../Actions";

class FoodList extends Component {
  componentDidMount() {
    this.props.fetchFoodList();
  }

  addIngredientToPot = ev => {
    const val = ev.target.dataset.value;
    this.props.addToPot(val);
  };

  onDeleteClick = ev => {
    const val = ev.target.dataset.value;
    this.props.deleteFood(val);
    this.props.fetchFoodList();
  };

  onReduceClick = ev => {
    const val = ev.target.dataset.value;
    this.props.updateFoodCount(val);
    console.log("val", val)
    this.props.fetchFoodList();
  };

  displayFoodList() {
    return _.map(this.props.foods, food => {
      return (
        <tr key={food._id}>
          <td
            onClick={this.addIngredientToPot.bind(this)}
            data-value={food.name}
          >
            {food.name}
          </td>
          <td>{food.type}</td>
          <td>{food.count}</td>
          <td>{food.created_at}</td>
          <td>
            <button
              data-value={food._id}
              onClick={this.onReduceClick.bind(this)}
            >
              Reduce
            </button>
          </td>
          <td>
            <button
              data-value={food._id}
              onClick={this.onDeleteClick.bind(this)}
            >
              Throw Out
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
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Count</th>
                    <th>Date Added</th>
                    <th>Reduce</th>
                    <th>Throw Out</th>
                  </tr>
                </thead>
                <tbody>{this.displayFoodList()}</tbody>
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
    foods: state.foods,
    pot: state.pot
  };
}
export default compose(
  connect(
    mapStateToProps,
    actions
  )
)(FoodList);
