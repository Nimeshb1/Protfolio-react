import React from "react";
import img from "../img/2.png";
import img1 from "../img/3.png";
import img2 from "../img/4.png";
import img3 from "../img/5.png";

export const Skill = () => {
  return (
    <div id="section2" className="skills">
      <div className="container">
        <div className="row">
          <div className="col">
            {/* <!-- titles --> */}
            <div className="title">
              {" "}
              <span>Skills</span>{" "}
            </div>
            {/* <!-- containts --> */}
            <div className="icons d-flex justify-content-between flex-wrap md">
              <div>
                <img src={img} alt="" height="120px" width="120px" />
                JavaScript
              </div>
              <div>
                <img src={img1} alt="" height="120px" width="120px" />
                CSS
              </div>
              <div>
                <img src={img2} alt="" height="120px" width="120px" />
                PHP
              </div>
              <div>
                <img src={img3} alt="" height="120px" width="120px" />
                HTML
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
