import React, { Component } from "react";
import BuildControls from "../../components/buildControls";
import Food from "../../components/Food";
import Zurag from "../../components/img";
import Order from "../../components/order";

const food_price = {
  tsuiwan: 13000,
  salad: 10000,
  nogoo: 11000,
  bansh: 9000,
  huushuur: 2000,
};

const imagee ={
  tsuiwan:"https://content.ikon.mn/news/2017/9/26/01da1b_icon_home_pic_x974.jpg",
  salad: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  nogoo:"https://images.pexels.com/photos/2365944/pexels-photo-2365944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  bansh:"https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=600",
  huushuur:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUbz4zNIZoAdiaBN9QpzHEeZTorVj4Mtz0w&usqp=CAU",
};
class FoodBuilder extends Component {
  // constructor(props) {
  //     super(props);
  // }
  state = {

    foods: {
      tsuiwan: 0,
      salad: 1,
      nogoo: 0,
      bansh: 0,
      huushuur: 0,
    },
    totalPrice: 0,
    image: {
      tsuiwan:"https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      salad: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nogoo:"https://images.pexels.com/photos/2365944/pexels-photo-2365944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bansh:"https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      huushuur:"https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }
  
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
          ima={imagee}
          FoodBuilder={this.state.image}
          // FoodBuilder={this.state.totalPrice} 
        />
        
        <Food foods={this.state.foods} />
        <div>
          <BuildControls
            //  src={this.state.src}
          
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
