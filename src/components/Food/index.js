// import React, { useState } from "react";
import React from "react";
import Zurag from "../img";
import Orts from "../Orts";
import style from "./style.module.css";

const Food = (props) => {
  const items = Object.entries(props.foods);
// const ite = Object.entries(props.foods);
  const content = [];
  // const cont = [];
  items.map((el) => {
    content.push(<Orts name={el[0]} number={el[1]} />);
  });
// ite.map((el) => {
//   cont.push(<Zurag/>)
// })

  return <div className={style.foodContainer}>{content}</div>;
};
export default Food;
