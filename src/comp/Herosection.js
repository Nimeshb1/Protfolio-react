import React from "react";
import img from "../img/hero.png";
export const Herosection = () => {
  return (
    <div id="section1" className="herosection">
      <div className="container">
        <div className="row py-5">
          {/* <!-- py --> */}

          <div className="col-md-5 text-center order-md-2">
            <img src={img} alt="" height="300px" width="300px" />
          </div>
          <div className="col-md-7">
            <label id="top-para" className="">
              Hi, It's me <span className="fw-bold ">Nimesh Bista</span>
              <div className="mt-2 mb-5 fs-4 fw-bold">Software Enginner</div>
            </label>
            <p>
              <label id="botoom-para" className="">
                Creating new websites and software and playing with silly code
                is my passion and is only thing that bring smile, anger and
                creative ideas in my face and brain.
              </label>
            </p>
            <button className="btn btn-danger">
              DOWNLOAD RESUME <i className="fa-solid fa-download"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
