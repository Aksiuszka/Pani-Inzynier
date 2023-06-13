import React, { FC } from "react";
import Footer from "../Footer";
import { LayoutProps } from "@/shared/interfaces/common";
import Nav from "../Navbar";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
