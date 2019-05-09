import _ from "lodash";
import React, { Component } from "react";
import Moment from "react-moment";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../Actions";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


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
    this.props.updateFoodCount(val);
    this.props.fetchFoodList();
  };
  onReduceClick = ev => {
    const val = ev.target.dataset.value;
    this.props.updateFoodCount(val);
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
          <td>
            <Moment format="MMM D YY">{food.created_at}</Moment>
          </td>
         
          <td>
            <Button
              data-value={food._id}
              onClick={this.onDeleteClick.bind(this)}
              size="sm"
              variant="danger"
            >
              Throw Out
            </Button>
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
              <Table bordered size="md" responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Count</th>
                    <th>Date Added</th>
                    <th>Throw Out</th>
                  </tr>
                </thead>
                <tbody>{this.displayFoodList()}</tbody>
              </Table>
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
