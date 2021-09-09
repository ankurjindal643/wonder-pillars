import { useEffect, useState } from "react";
import "./App.css";
import Country from "./country";
let App = () => {
  
  return (
    <>
      <div className="main-div">
        <h1 className="heading">Countries</h1>
        <input
          className="search"
          type="text"
          placeholder="Search for Countries"
        />
        <div className="country-div">

          <Country />;
        </div>
      </div>
    </>
  );
};

export default App;
