import React from "react";
import zagwar from "./style.module.css";
function Zurag(props) {

      // const teest = Object.entries(props.imagee);
      // const zuragnuud= [];
      // teest.map((el) => {
      //       zuragnuud.push(
      //           <div><img src={props.ima[el[0]]} alt=""/></div>  
      //       )
      // })
      return ( 
            <div className="imagee">
 <img src={props.src} alt=""/>
          </div>
       );
}

export default Zurag;