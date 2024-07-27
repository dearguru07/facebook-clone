import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-nav">
        <img className="logo-img" src="data:image/png;base64,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"></img>
        <input className="data" placeholder="Search Facebook"></input>
        <i class="bi bi-search"></i>
      </div>
      <div className="center-nav">
        <i class="bi bi-house-door icon"></i>
        <i class="bi bi-play-btn icon"></i>
        <i class="bi bi-shop-window icon"></i>
        <i class="bi bi-people icon"></i>
        <i class="bi bi-controller icon"></i>
      </div>
      <div className="nav-right">
        <i class="bi bi-list s-icon"></i>
        <i class="bi bi-messenger s-icon"></i>
        <i class="bi bi-bell s-icon"></i>
        <i class="bi bi-person-circle s-icon"></i>
      </div>
    </div>
  );
};
export default Navbar;
