import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../Actions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";
import Tablet from '../../assets/images/Tablet.jpg';
import Form from "react-bootstrap/Form";

class Signup extends Component {
    onFormSubmit = formProps => {
      this.props.signup(formProps, ()=>{
        this.props.history.push("/stockpile");
      });
    };

  FieldInput = ({ input, type, placeholder, label }) => {
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
    const {handleSubmit} = this.props;
    return (
      <Container>
        <style type="text/css">
          {`
                .btn-flat {
                background-color: #5B7E20;
                color: white;
                }
            `}
        </style>
        <Row>
        
          <Col sm={8}>
              <Image src={Tablet} fluid/>
          </Col>
            <Col sm={4}>
            
            <Card className="text-center justify-content-md-center h-100 d-flex">
              <Card.Header as="h5">Sign Up</Card.Header>
              <Container>
              <form onSubmit={handleSubmit(this.onFormSubmit)}>
                <fieldset>
                  <Field
                    name="name"
                    type="text"
                    placeholder='Name'
                    component={this.FieldInput}
                    autoComplete="none"
                  />
                </fieldset>

                <fieldset>
                  <Field
                    name= "email"
                    type= "text"
                    placeholder= 'Email'
                    component={this.FieldInput}
                    autoComplete= "none"
                    />
                </fieldset>

                <fieldset>
                    <Field
                      name="password"
                      type="password"
                      placeholder='password'
                      component={this.FieldInput}
                      autoComplete="none"
                    />
                </fieldset>
                <div>{this.props.errorMessage}</div>
                <Button className="justify-content-md-center"
                  variant="flat"
                  type="submit">Sign Up</Button>
              </form>
              </Container>
            </Card>
          </Col>
          
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state){
  return{ errorMessage: state.auth.errorMessage}
}


export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(Signup);