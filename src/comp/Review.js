import React, { useState } from "react";

export const Review = () => {
  let [check, strcheck] = useState([]);
  let [stor1, strstore1] = useState(false);
  let [stor2, strstore2] = useState(false);
  let [stor3, strstore3] = useState(false);
  let [stor4, strstore4] = useState(false);
  let [stor5, strstore5] = useState(false);
  let [classe, strclass] = useState(" fa-regular fa-star");
  let [classe1, strclass1] = useState(" fa-regular fa-star");
  let [classe2, strclass2] = useState(" fa-regular fa-star");
  let [classe3, strclass3] = useState(" fa-regular fa-star");
  let [classe4, strclass4] = useState(" fa-regular fa-star");
  // let [classf, strclassf] = useState("fa-regular fa-star");

  const handelonclick = (type) => {
    if (type === "1") {
      if (stor1 === false) {
        strstore1(true);
        strclass("color fa-regular fa-star");
      } else {
        strstore1(false);
        strclass(" fa-regular fa-star");
      }
    }
    if (type === "2") {
      if (stor2 === false) {
        strstore2(true);
        strclass1("color fa-regular fa-star");
      } else {
        strstore2(false);
        strclass1(" fa-regular fa-star");
      }
    }
    if (type === "3") {
      if (stor3 === false) {
        strstore3(true);
        strclass2("color fa-regular fa-star");
      } else {
        strstore3(false);
        strclass2(" fa-regular fa-star");
      }
    }
    if (type === "4") {
      if (stor4 === false) {
        strstore4(true);
        strclass3("color fa-regular fa-star");
      } else {
        strstore4(false);
        strclass3(" fa-regular fa-star");
      }
    }
    if (type === "5") {
      if (stor5 === false) {
        strstore5(true);
        strclass4("color fa-regular fa-star");
      } else {
        strstore5(false);
        strclass4(" fa-regular fa-star");
      }
    }
  };
  console.log(stor2);

  return (
    <form className="all">
      <div className="star">
        <i
          onClick={() => handelonclick("1")}
          className={classe}

          // {stor ? "color fa-regular fa-star" : " fa-regular fa-star"}
        ></i>
        <i onClick={() => handelonclick("2")} className={classe1}></i>
        <i onClick={() => handelonclick("3")} class={classe2}></i>
        <i onClick={() => handelonclick("4")} class={classe3}></i>
        <i onClick={() => handelonclick("5")} class={classe4}></i>
      </div>
      <div className="review">
        <h1>Rate this Website Thank you!!!!!!</h1>
        <p>
          <button className="btn btn-primary w-lg-100 m">Done</button>
        </p>
      </div>
    </form>
  );
};
