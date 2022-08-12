import React from "react";
import BuildControl from "../buildControl";

function BuildControls(props) {
  return (
    <div>
      <h1>Нийт үнэ: {props.food_price}</h1>
      <BuildControl
        title="tsuiwan"
        hoolNemeh={props.hoolNemeh}
        hoolHasah={props.hoolHasah}
        disabled={props.disabled}
      />
      <BuildControl
        title="salad"
        hoolNemeh={props.hoolNemeh}
        hoolHasah={props.hoolHasah}
        disabled={props.disabled}
      />
      <BuildControl
        title="nogoo"
        hoolNemeh={props.hoolNemeh}
        hoolHasah={props.hoolHasah}
        disabled={props.disabled}
      />
      <BuildControl
        title="bansh"
        hoolNemeh={props.hoolNemeh}
        hoolHasah={props.hoolHasah}
        disabled={props.disabled}
      />
      <BuildControl
        title="huushuur"
        hoolNemeh={props.hoolNemeh}
        hoolHasah={props.hoolHasah}
        disabled={props.disabled}
      />
    </div>
  );
}

export default BuildControls;
