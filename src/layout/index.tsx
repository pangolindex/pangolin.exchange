import React from "react";
import Header from "./Header";
import { Body, Wrapper } from "./styled";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Body>{children}</Body>
    </Wrapper>
  );
};

export default Layout;
