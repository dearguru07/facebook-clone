import React from "react";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div>
        <div className="side-icon">
          <i class="bi bi-person-circle f-icon"></i>
          <h4>GuruCharan P</h4>
        </div>
        <div className="side-icon">
          <i class="bi bi-people-fill f-icon"></i>
          <h4>Friends</h4>
        </div>
        <div className="side-icon">
          <i class="bi bi-clock-history f-icon"></i>
          <h4>Memories</h4>
        </div>
        <div className="side-icon">
          <i class="bi bi-bookmark-fill f-icon"></i>
          <h4>Saved</h4>
        </div>
        <div className="side-icon">
        <i class="bi bi-globe f-icon"></i> <h4>Groups</h4>
        </div>
        <div className="side-icon">
          <i class="bi bi-play-btn-fill f-icon"></i>
          <h4>Video</h4>
        </div>
        <div className="side-icon">
          <i class="bi bi-bar-chart-line-fill f-icon"></i>
          <h4>MarketPlace</h4>
        </div>
        <div className="side-icon">
          <i class="bi bi-calendar2-event-fill f-icon"></i>
          <h4>Feeds</h4>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
