import React, { Component } from "react";
import BuildControls from "../../components/buildControls";
import Food from "../../components/Food";
import Order from "../../components/order";

const food_price = {
  tsuiwan: 12000,
  salad: 10000,
  nogoo: 11000,
  bansh: 9000,
  huushuur: 2000,
};

class FoodBuilder extends Component {
  // constructor(props) {
  //     super(props);
  // }
  state = {

    foods: {
      tsuiwan: 0,
      salad: 0,
      nogoo: 0,
      bansh: 0,
      huushuur: 0,
    },
    totalPrice: 0,
  };

  hoolNemeh = (type) => {
    console.log("======" + type);
    const newFood = { ...this.state.foods };
    newFood[type]++;
    this.setState({ foods: newFood });
    const newPrice = this.state.totalPrice + food_price[type];
    this.setState({ totalPrice: newPrice });
  };
  hoolHasah = (type) => {
    if (this.state.foods[type] !== 0) {
      console.log("-----------" + type);
      const newFood = { ...this.state.foods };
      newFood[type]--;
      this.setState({ foods: newFood });
      const newPrice = this.state.totalPrice - food_price[type];
      this.setState({ totalPrice: newPrice });
    }
  };
  render() {
    const disabledBtn = { ...this.state.foods };
    // spread operator gert sudlah
    for (let key in disabledBtn) {
      disabledBtn[key] = disabledBtn[key] <= 0;
    }
    // hoool = (type) => 
    return (
      <div>
        <Order
          foods={this.state.foods}
          price={food_price}
          FoodBuilder={this.state.totalPrice} 
        />

        <Food foods={this.state.foods} />
        <div>
          <BuildControls
            food_price={this.state.totalPrice}
            hoolNemeh={this.hoolNemeh}
            hoolHasah={this.hoolHasah}
            disabled={disabledBtn}
          />
        </div>
      </div>
    );
  }
}

export default FoodBuilder;
