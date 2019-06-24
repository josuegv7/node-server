import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../Actions';

import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import FoodImage from '../../assets/images/Food.jpg';

class SignIn extends Component {
    onFormSubmit = formProps => {
        this.props.signin(formProps, () => {
            this.props.history.push("/stockpile");
        });
    };
    render() {
        const { handleSubmit } = this.props;
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

            <Card>
              <Row>
                <Col xs={10} md={8}>
                  <Image variant="md" src={FoodImage} fluid />
                </Col>
                <Col xs={6} md={4}>
                  <Card className="justify-content-md-center h-100 d-flex">
                    <Container>
                      <Row className="justify-content-md-center">
                        <h1>Welcome:</h1>
                      </Row>
                      <Row className="justify-content-md-center">
                        <Form
                          onSubmit={handleSubmit(this.onFormSubmit)}
                        >
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label className="justify-content-md-left">
                              Email:
                            </Form.Label>
                            <Row>
                              <Field
                                name="email"
                                type="text"
                                component="input"
                                autoComplete="none"
                              />
                            </Row>
                          </Form.Group>

                          <Form.Group controlId="formBasicPassword">
                            <Form.Label className="justify-content-md-left">
                              Password:
                            </Form.Label>
                            <Row>
                              <Field
                                name="password"
                                type="password"
                                component="input"
                                autoComplete="none"
                              />
                            </Row>
                          </Form.Group>
                          <div>{this.props.errorMessage}</div>
                          <Button
                            className="justify-content-md-center"
                            variant="flat"
                            type="submit"
                          >
                            Submit
                          </Button>
                        </Form>
                      </Row>
                    </Container>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Container>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage }
}


export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signin' })
)(SignIn);