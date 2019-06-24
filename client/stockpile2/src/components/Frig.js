import React, { Component } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import FrigImage from '../assets/images/004-frig.png'
import FoodList from './foodList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../assets/css/custom.css';

class Frig extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
        };
    }

    render() {
        const { open } = this.state;
        return (
            <div>
            <Row>
                <Col>
                <h3>Frig:</h3>
                </Col>
                <Col>
                    <Image className="frigImage" src={FrigImage} fluid onClick={() => this.setState({ open: !open })}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}/>
                
                    <Collapse in={this.state.open}>
                        <div id="example-collapse-text">
                            <FoodList/>
                        </div>
                    </Collapse>
                </Col>
            </Row>
            </div> 
                );
            }
        }
        
                  
export default Frig; 