import React from "react";

function BuildControl(props) {
  return (
    <div>
      <p>{props.title}</p>
      <button onClick={() => props.hoolNemeh(props.title)}>нэмэх</button>
      <button
        disabled={props.disabled[props.title]}
        onClick={() => props.hoolHasah(props.title)}
      >
        хасах
      </button>
    </div>
  );
}

export default BuildControl;
