import React, { useState } from "react";
import {
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Button
} from "semantic-ui-react";
import { theme } from "../../theme";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      {/* Footer */}
    </>
  );
};

export default Layout;
