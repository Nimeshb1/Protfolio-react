import React from "react";

import img from "../img/imgpng.png";
import { Footer } from "./Footer";

export const About = () => {
  return (
    <div className="containt">
      <div className="img ">
        <img src={img} alt="" height={500} />
      </div>
      <div className="container  ">
        <h1 className="">
          Nimesh <p>Bista</p>{" "}
        </h1>
        <section className="text-white">
          <h3>Sofetware Enginer </h3>
          <h3>Jouniour Front-End Developer </h3>
        </section>
      </div>
    </div>
  );
};
