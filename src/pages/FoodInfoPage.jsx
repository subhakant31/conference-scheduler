import React, { useEffect } from "react";
import Foodcomponent from "../components/Foodcomponent/Foodcomponent";

function FoodInfoPage() {

  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
    <React.Fragment>
      <Foodcomponent></Foodcomponent>
    </React.Fragment>
  );
}

export default FoodInfoPage;
