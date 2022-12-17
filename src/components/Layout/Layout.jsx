import { Fragment } from "react";

//imported components

import Footer from "./Footer";
import Nav from "./Nav";

const Layout = (props) => {
  return (
    <Fragment>
      <Nav />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
