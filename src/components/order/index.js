import React from "react";


function Order(props) {
    
    const test = Object.entries(props.foods);
    const hoolnuud = [];
    const neewPrice = [];
    test.map((el) => {
hoolnuud.push(
<p>
    {el[0]} : {el[1]} 
<span> {props.price[el[0]]}</span>
<span> {props.neewPrice}</span>
</p>

);

    });
    // neewPrice.map((el) =>{

    // })
  return (
    <div>
      <h2>Modal</h2>
      <p> {hoolnuud} hhhh</p>
     
    </div>
  );
}

export default Order;
