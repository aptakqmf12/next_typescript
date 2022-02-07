import React from "react";
import Nav from "./Nav";
import HeadInfo from "./HeadInfo";
import { HeadType } from "../types/types";

const Layout: React.FC<HeadType> = ({ children }) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
