import React from "react";
import img1 from "../../assets/icon.png";

export default function MidNavbar() {
  return (
    <div className="mid-navbar shadow-sm">
      <div className="container ">
        <div className="mid-navbar-row">
          <div className="mid-navbar-item">
            <img src={img1} alt="img" />
            <span className="align-middle">Shareable Certificate</span>
          </div>
          <div className="mid-navbar-item">
            <img src={img1} alt="img" />
            <span className="align-middle">Flexible Deadlines</span>
          </div>
          <div className="mid-navbar-item">
            <img src={img1} alt="img" />
            <span className="align-middle">100% Online Courses</span>
          </div>
          <div className="mid-navbar-item">
            <img src={img1} alt="img" />
            <span className="align-middle">Approx.24 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}
