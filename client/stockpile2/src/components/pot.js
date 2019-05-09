import React, { Component } from 'react';
import { compose, bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { lookuprecipesSpoon } from '../Actions/index.js';
import potIcon from '../assets/images/005-cook.png';
import Button from 'react-bootstrap/Button';
import '../assets/css/custom.css';
class Pot extends Component {
    onFormSubmit(event) {
        event.preventDefault();
        this.props.lookuprecipesSpoon(this.props.pot);
    }

    removeFromPot = ev =>{
      const val = ev.target.dataset.value;
      let filteredArray = this.state.pot.filter(item => item !== ev.target.value)
      this.setState({pot: filteredArray})
    }


    render() {
        if (this.props.pot[0]) {
          return this.renderPot();
        } else {
          return this.renderEmptyPot();
        }
    }

    renderEmptyPot() {
        return (<div><img className="potImage " src={potIcon} alt='POT' /></div>)
    }
    renderPot() {
        const potIngredientList = this.props.pot.map(function (ingredient) {
            return (
              <span key={0}>{ingredient}, </span>

            );
        })
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
