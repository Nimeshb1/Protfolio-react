import React from "react";
import img from "../img/flexblog1.png";
import img1 from "../img/flexblog2.png";
import img2 from "../img/flexblog3.png";

export const Project = () => {
  return (
    <div id="section3" className="project py-2">
      <div className="title">
        {" "}
        <span>Project</span>{" "}
      </div>

      <div className="img-sec d-flex justify-content-between flex-wrap md-10">
        <a href="https://nimeshb1.github.io/Flexblog/">
          <img src={img} alt="" height="200px" width="350px" />
        </a>
        <a href="https://nimeshb1.github.io/Flexblog/">
          <img src={img1} alt="" height="200px" width="350px" />
        </a>
        <a href="https://nimeshb1.github.io/Flexblog/">
          <img src={img2} alt="" height="200px" width="350px" />
        </a>
      </div>
      <div className="more d-flex justify-content-center  mt-4">
        <button>
          <a
            className="ame text-decoration-none"
            href="https://github.com/Nimeshb1"
          >
            <i className="fa-brands fa-github"></i> More...{" "}
          </a>{" "}
        </button>
      </div>
      <div className="githyb ">
        <a href="https://github.com/Nimeshb1/Flexblog">
          Flexbox Project <i class="fa-brands fa-github"></i>{" "}
        </a>
      </div>
    </div>
  );
};
