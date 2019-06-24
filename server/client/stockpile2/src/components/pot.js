import React, { Component } from 'react';
import { compose, bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { lookuprecipesSpoon } from '../Actions/index.js';
import potIcon from '../assets/images/005-cook.png';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/custom.css';



class Pot extends Component {
    // removeFromPot = (ev) => {
    //     ev.preventDefault();
    //     const val = ev.target.dataset.value;
    //     //   let filteredArray = this.state.pot.filter(item => item !== ev.target.value);
    //     //   let y = this.setState({pot: filteredArray});
    //     console.log("Val: ", val)
    //     //   console.log("Y:",y);
    //     // console.log("Filtered Array: ",filteredArray);
    // };

    // Clicker = (ev) =>{
    //     const val = ev.target.dataset.value;
    //     console.log("Val: ", val);
    //     console.log("I'm Clicking!!");
    // };

    // onClick = { this.Clicker.bind(this) }


    onDeleteClickPot = ev => {
        alert("Button Clicked!");
    }


    onFormSubmit(event) {
        event.preventDefault();
        this.props.lookuprecipesSpoon(this.props.pot);
    }

    render() {
        if (this.props.pot[0]) {
          return this.renderPot();
        } else {
          return this.renderEmptyPot();
        }
    }

    renderEmptyPot() {
        return (<div><Row><Col><h3>Pot:</h3></Col><Col><img className="potImage " src={potIcon} alt='POT' /></Col></Row></div>)
    }
    renderPot() {
        const potIngredientList = this.props.pot.map(function (ingredient) {
            return (
                <div>
                <span key={0}>{ingredient}, </span>
                <Button onDelete={this.onDeleteClickPot} variant="flat">Delete Pot</Button>
                </div>
            );
        },this)
        return (
            <form onSubmit= {this.onFormSubmit.bind(this)} >
                <div>
                    <div>
                        <h5>POT:</h5>
                    </div>
                    <div>
                        {potIngredientList}
                    </div>
                    <Button type="submit" variant="flat">LOOK UP</Button>
                </div>
            </form>
        )
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ lookuprecipesSpoon }, dispatch);
}
function mapStateToProps({pot}) {
    
    return {
        pot
    }
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(Pot);
