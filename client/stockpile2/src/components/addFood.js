import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../Actions";


class AddFood extends Component {
    onFoodFormSubmit = foodFormProps =>{
        this.props.addFood(foodFormProps)
    }
    refreshfoodlist() {
        this.props.fetchFoodList();
    }
    render() {
        const { handleSubmit } = this.props;
        return (
          <div>
            <form onSubmit={handleSubmit(this.onFoodFormSubmit)}>
              <label>Food: </label>
              <Field
                label="Food: "
                type="text"
                name="name"
                component="input"
              />
              <label>Type: </label>
              <Field label="Type: " name="type" component="input" />
              <label>Frig: </label>
              <label>True</label>
              <Field
                name="frig"
                component="input"
                type="radio"
                value="true"
              />
              <label>False</label>
              <Field
                name="frig"
                component="input"
                type="radio"
                value="false"
              />
              <label>Count: </label>
              <Field
                label="Count: "
                name="count"
                component="input"
                type="number"
                placeholder="1"
              />
              <div>
                <button type="submit">ADD</button>
                <button>Cancel</button>
              </div>
            </form>
          </div>
        );
    }
}

AddFood = reduxForm({
  form: "NewFoodForm",
  fields: ["name", "type", "frig", "count"]
})(AddFood);

export default compose(
  connect(null, actions))(AddFood);