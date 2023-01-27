import { Fragment } from "react";

// importing style from style-components
import styled from "styled-components";

//importing from react-router-dom
import { Outlet } from "react-router-dom";

//imported components

import Footer from "./Footer";
import Nav from "./Nav";

const LayoutControl = styled.main`
  & {
    width: 100%;
    margin: 0 auto;
  }
  & > * {
  }
  @media (max-width: 768px) {
    & > * {
      padding-right: 1.6em;
      padding-left: 1.6em;
      width: 100%;
    }
  }
`;

const Layout = (props) => {
  return (
    <Fragment>
      <Nav />
      <LayoutControl>
        <Outlet />
      </LayoutControl>
      <Footer />
    </Fragment>
  );
};

export default Layout;
