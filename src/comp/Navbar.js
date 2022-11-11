import React from "react";
import img from "../img/1.png";

export const Navbar = () => {
  return (
    <>
      {" "}
      <nav id="navsec" class="top-nav navbar navbar-expand-lg bg-none">
        <div class="container">
          <img src={img} alt="" />

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#section1">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#section3">
                  Projects
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#section2">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#section4">
                      About
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#section5">
                      Contact{" "}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
