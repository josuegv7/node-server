import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../Actions";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";


class AddFood extends Component {
    onFoodFormSubmit = foodFormProps =>{
        this.props.addFood(foodFormProps)
    }
    refreshfoodlist() {
        this.props.fetchFoodList();
    }
  FieldInput = ({ input, type, placeholder, label}) => {
    return (
      <Form.Control
        size="sm" 
        type={type} 
        value={input.value}
        onChange={input.onChange}
        label={label}
        placeholder={placeholder} />
    )
  }

    render() {
        const { handleSubmit } = this.props;
        return (
          <div style={{ width: "12rem" }}>
            <style type="text/css">
              {`
                .btn-flat {
                background-color: #5B7E20;
                color: white;
                }
            `}
            </style>
            <Card>
              <Card.Header>Add Food:</Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit(this.onFoodFormSubmit)}>
                  <Form.Row>  
                    <Field
                      type='text'
                      name='name'
                      component={this.FieldInput}
                      placeholder='Food'
                    />
                  </Form.Row>
                  <Form.Row>
                    <Field
                      type='text'
                      name='type'
                      placeholder='Type'
                      component={this.FieldInput}
                    />
                  </Form.Row>
                  <Form.Row>
                    <Form.Label className="justify-content-md-left">
                      Frig:
                    </Form.Label>
                    <Col>
                    <Form.Label   className="justify-content-md-left">
                      True
                    </Form.Label>
                    <Field
                      name="frig"
                      component={this.FieldInput}
                      type="radio"
                      value="true"
                      
                    />
                    </Col>
                    <Col>
                    <Form.Label className="justify-content-md-left">
                      False
                    </Form.Label>
                    <Field
                      name="frig"
                      label="false"
                      type="radio"
                      value="false"
                      component={this.FieldInput}
                      
                    />
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Form.Label className="justify-content-md-left">
                      Count:
                    </Form.Label>
                    <Field
                      name='count'
                      type='number'
                      placeholder="1"
                      component={this.FieldInput}
                    />
                  </Form.Row>
                  <Form.Row className="justify-content-md-center">
                    <Button
                      className="justify-content-md-center"
                      variant="flat"
                      type="submit"
                      size="sm"
                      onClick={this.refreshfoodlist()}
                    >
                      ADD
                    </Button>
                    <Button
                      className="justify-content-md-center"
                      variant="danger"
                      size="sm"
                      type="submit"
                    >
                      Cancel
                    </Button>
                  </Form.Row>
                </Form>
              </Card.Body>
            </Card>
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