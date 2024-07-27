import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar";
import Body from "./body";


const AppLayOut=()=>{
  return <div>
    <Navbar/>
    <Body/>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut/>);
