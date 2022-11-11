import React from "react";
import img from "../img/hero.png";

export const About = () => {
  return (
    <>
      <div id="section4" className="title">
        {" "}
        <span>About Me</span>{" "}
      </div>
      <div className="container aboutme">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="sameimg"></div>
            <img src={img} alt="" height="250px" width="250px" />
          </div>
          <div className="col-md-8 mt-3">
            <label for="">
              My name is Nimesh and my main hobby is codeing. I'll usually start
              each day by writting some code at VS code, then follow that up
              with a healthy breakfast.
              <p>
                <p>
                  After that, It's onto six hours of witing code for my Project.
                  I always try to learn something new every day and also try to
                  solve bugs which are on my way while codeing.
                </p>
              </p>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
