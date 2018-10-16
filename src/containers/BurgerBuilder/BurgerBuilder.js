import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    },
    totalPrice: 4
  };

  addIngredientHandler = type => {
    const prevCount = this.state.ingredients[type];
    const updatedCount = prevCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const priceWithIngredient = this.state.totalPrice + priceAddition;
    this.setState({
      totalPrice: priceWithIngredient,
      ingredients: updatedIngredients
    });
  };

  removeIngredientHandler = type => {
    const prevCount = this.state.ingredients[type];
    if (prevCount <= 0) {
      return;
    }
    const updatedCount = prevCount + -1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const priceWithIngredient = this.state.totalPrice - priceDeduction;
    this.setState({
      totalPrice: priceWithIngredient,
      ingredients: updatedIngredients
    });
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
