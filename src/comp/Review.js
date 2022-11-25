import React, { useState } from "react";

export const Review = () => {
  let [check, strcheck] = useState("");
  let [stor1, strstore1] = useState(false);
  let [stor2, strstore2] = useState(false);
  let [stor3, strstore3] = useState(false);
  let [stor4, strstore4] = useState(false);
  let [stor5, strstore5] = useState(false);
  let [classe, strclass] = useState(" fa-solid fa-star");
  let [classe1, strclass1] = useState(" fa-solid fa-star");
  let [classe2, strclass2] = useState(" fa-solid fa-star");
  let [classe3, strclass3] = useState(" fa-solid fa-star");
  let [classe4, strclass4] = useState(" fa-solid fa-star");

  let [thanks, strthanks] = useState();

  const handelonclick = (type) => {
    if (type === "1") {
      if (stor1 === false) {
        strstore1(true);
        strclass("color fa-solid fa-star");
      } else {
        strstore1(false);
        strclass(" fa-solid fa-star");
        strstore2(false);
        strclass1(" fa-solid fa-star");
        strstore3(false);
        strclass2(" fa-solid fa-star");
        strstore4(false);
        strclass3(" fa-solid fa-star");
        strstore5(false);
        strclass4(" fa-solid fa-star");
      }
    }
    if (type === "2") {
      if (stor2 === false) {
        strstore2(true);
        strclass1("color fa-solid fa-star");
        strstore1(true);
        strclass("color fa-solid fa-star");
      } else {
        strstore2(false);
        strclass1(" fa-solid fa-star");
        strstore3(false);
        strclass2(" fa-solid fa-star");
        strstore4(false);
        strclass3(" fa-solid fa-star");
        strstore5(false);
        strclass4(" fa-solid fa-star");
      }
    }
    if (type === "3") {
      if (stor3 === false) {
        strstore3(true);
        strclass2("color fa-solid fa-star");
        strstore2(true);
        strclass1("color fa-solid fa-star");
        strstore1(true);
        strclass("color fa-solid fa-star");
      } else {
        strstore3(false);
        strclass2(" fa-solid fa-star");
        strstore4(false);
        strclass3(" fa-solid fa-star");
        strstore5(false);
        strclass4(" fa-solid fa-star");
      }
    }
    if (type === "4") {
      if (stor4 === false) {
        strstore4(true);
        strclass3("color fa-solid fa-star");
        strstore3(true);
        strclass2("color fa-solid fa-star");
        strstore2(true);
        strclass1("color fa-solid fa-star");
        strstore1(true);
        strclass("color fa-solid fa-star");
      } else {
        strstore4(false);
        strclass3(" fa-solid fa-star");
        strstore5(false);
        strclass4(" fa-solid fa-star");
      }
    }
    if (type === "5") {
      if (stor5 === false) {
        strstore5(true);
        strclass4("color fa-solid fa-star");
        strstore4(true);
        strclass3("color fa-solid fa-star");
        strstore3(true);
        strclass2("color fa-solid fa-star");
        strstore2(true);
        strclass1("color fa-solid fa-star");
        strstore1(true);
        strclass("color fa-solid fa-star");
      } else {
        strstore5(false);
        strclass4(" fa-solid fa-star");
      }
    }
  };

  const onhandelOnSubmitte = (e) => {
    e.preventDefault();
    strcheck("Thank you for Your Rewiew !!!");
  };
  console.log(check);

  return (
    <div className="all" data-aos="fade-right">
      {check.length > 1 ? (
        <h1>{check}</h1>
      ) : (
        <form className="" onSubmit={onhandelOnSubmitte}>
          <div className="star mx-lg-5 px-lg-5 gap-lg-5  ">
            <i onClick={() => handelonclick("1")} className={classe}></i>
            <i onClick={() => handelonclick("2")} className={classe1}></i>
            <i onClick={() => handelonclick("3")} class={classe2}></i>
            <i onClick={() => handelonclick("4")} class={classe3}></i>
            <i onClick={() => handelonclick("5")} class={classe4}></i>
          </div>

          <div className="review mt-5 mx-5">
            <h1 className="">Rate this Website Thank you!!!!!!</h1>
            {stor1 === true && (
              <p>
                <button className="btn btn-primary w-100 ">Done</button>
              </p>
            )}
          </div>
        </form>
      )}
    </div>
  );
};
