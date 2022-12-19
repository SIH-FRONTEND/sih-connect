import { Fragment } from "react";

//importing from react-router-dom
import { Outlet } from "react-router-dom";

//imported components

import Footer from "./Footer";
import Nav from "./Nav";

const Layout = (props) => {
  return (
    <Fragment>
      <Nav />
      <main className=" xl2:mx-[115px] mx-[16px] ">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
