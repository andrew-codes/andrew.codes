import React, { Fragment } from "react";
import Seo from "./Seo";
import { StyleProvider } from "./StyleProvider";

const Layout = ({ children }) => (
  <Fragment>
    <Seo />
    <main>{children}</main>
  </Fragment>
);
export default Layout;
