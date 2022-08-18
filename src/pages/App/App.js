import React from "react";
import "./App.css";

import FoodBuilder from "../FoodBuilder";
import Toolbar from "../../components/Toolbar";
function App() {
  return (
    <div className="App">
      <Toolbar />
      <FoodBuilder />
      
    </div>
  );
}

export default App;
