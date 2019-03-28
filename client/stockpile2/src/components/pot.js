import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Pot extends Component {
    // onFormSubmit(event) {
    //     event.preventDefault();
    //     this.props.lookuprecipesYummly(this.props.pot);
    // }

    render() {
        if (this.props.pot[0]) {
          return this.renderPot();
        } else {
          return this.renderEmptyPot();
        }
    }
    renderEmptyPot() {
        // return (<div><img src={potIcon} className={css.potIcon} alt='POT' /></div>)
        return(<div><h4>Empty POT</h4></div>)
    }
    renderPot() {
        // const potIngredientList = () =>{
        // return (
            
        //     <h5>POT is being rendered</h5>
            
        // )}
        const potIngredientList = this.props.pot.map(function (ingredient) {
            return (
              //<span key={0}>{ingredient}, </span>
              <span key={0}>{ingredient}, </span>
            );
        })
        return (
            <form >
                <div>
                    <div>
                        <h5>POT:</h5>
                    </div>
                    <div>
                        {potIngredientList}
                    </div>
                    <button type="submit">LOOK UP</button>
                </div>
            </form>
        )
    }
};

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ lookuprecipesYummly }, dispatch);
// }
function mapStateToProps(state) {
    return {
        pot: state.pot
    }
};
export default compose(connect(mapStateToProps))(Pot);