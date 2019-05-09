import React, { Component } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import FrigImage from '../assets/images/004-frig.png'
import FoodList from './foodList';
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
                <h3>Frig</h3>
                <Image className="frigImage" src={FrigImage} fluid onClick={() => this.setState({ open: !open })}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}/>
            
            <Collapse in={this.state.open}>
                <div id="example-collapse-text">
                    <FoodList/>
                </div>
            </Collapse>
            </div> 
                );
            }
        }
        
                  
export default Frig; 