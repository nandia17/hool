import React from "react";
// import FoodBuilder from "../../pages/FoodBuilder";
import BuildControl from "../buildControl";
import Zurag from "../img";



function BuildControls(props) {
  return (
    <div>
      
      <h1>Нийт үнэ: {props.food_price}</h1>
      <Zurag  src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"/>
      <BuildControl
        title="tsuiwan"
         
        hoolNemeh={props.hoolNemeh}
        hoolHasah={props.hoolHasah}
        disabled={props.disabled}
      />
      <Zurag  src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"/>
      <BuildControl
        title="salad"
       
        hoolNemeh={props.hoolNemeh}
        hoolHasah={props.hoolHasah}
        disabled={props.disabled}
      />
      <Zurag  src="https://images.pexels.com/photos/2365944/pexels-photo-2365944.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"/>
      <BuildControl
        title="nogoo"
      
        hoolNemeh={props.hoolNemeh}
        hoolHasah={props.hoolHasah}
        disabled={props.disabled}
      />
       <Zurag  src="https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=300"/>
      <BuildControl
        title="bansh"
      
        hoolNemeh={props.hoolNemeh}
        hoolHasah={props.hoolHasah}
        disabled={props.disabled}
      />
       <Zurag  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUbz4zNIZoAdiaBN9QpzHEeZTorVj4Mtz0w&usqp=CAU"/>
      <BuildControl
        title="huushuur"
       
        hoolNemeh={props.hoolNemeh}
        hoolHasah={props.hoolHasah}
        disabled={props.disabled}
      />

      <button
        disabled={props.food_price <= 0}
       
      >
        Захиалах
      </button>
    </div>
  );
}

// props.foods eer map guilgeed    ++ contentei bgaa
//  build controls
export default BuildControls;
