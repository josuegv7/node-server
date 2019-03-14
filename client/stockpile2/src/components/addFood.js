import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../Actions";

const renderField = field => {
    const { input, type } = field;
    return (
        <div className="form-group">
            <label> {field.label}</label>
            <input {...input} type={type} />
        </div>
    );
};

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
              <Field
                label="Food: "
                name="name"
                component={renderField}
              />
              <Field
                label="Type: "
                name="type"
                component={renderField}
              />
              <Field
                label="Frig: "
                name="Frig"
                component={renderField}
              />
              <Field
                label="Count: "
                name="Count"
                component={renderField}
              />
              <div>
                <button type="submit" onClick={this.refreshfoodlist()}>
                  ADD
                </button>
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

export default compose(connect(null, actions))(AddFood);