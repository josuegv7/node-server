import _ from 'lodash';
import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from 'react-redux';
import * as actions from "../Actions";

class FoodList extends Component {
    componentDidMount(){
        this.props.fetchFoodList();
    }
    displayFoodList() {
        return _.map(this.props.foods, food => {
            return (
              <tr>
                <td key={food._id}>{food.name}</td>
                <td>{food.type}</td>
                <td>{food.count}</td>
                <td>
                    <button data-value={food._id}> 
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
    };
}

function mapStateToProps(state) {
    return {foods: state.foods};
}
export default compose(connect(mapStateToProps, actions))(FoodList);