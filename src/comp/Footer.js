import React from "react";
import { NewNavbar } from "./Navbar";

export const Footer = ({ children }) => {
  return (
    <>
      <NewNavbar />
      {children}
    </>
  );
};
