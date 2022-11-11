import React from "react";

export const Contact = () => {
  return (
    <div id="section5" className="container contact rounded-5 p-1">
      <div className="title">
        {" "}
        <span>Contact</span>{" "}
      </div>
      <div className="row mb-5  ">
        <div className="col bo fa-3x d-flex justify-content-around px-5">
          <a className="icon1" href="https://www.facebook.com/ne.mesh.5">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a className="icon3" href="https://www.instagram.com/ne.mesh/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a className="icon4" href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a className="icon5" href="https://github.com/Nimeshb1">
            <i className="fa-brands fa-github"></i>
          </a>
          <a className="icon6" href="mailto:nimeshbista164@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
