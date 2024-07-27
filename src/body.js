import React from "react";
import Posts from "./middle";
import SideBar from "./sidebar";
import RightBar from "./rightbar";

const Body = () => {
  return (
    <div className="body-app">
      <SideBar />
      <Posts />
      <RightBar />
    </div>
  );
};
export default Body;
