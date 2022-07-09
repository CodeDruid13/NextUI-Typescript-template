import { Container } from "@nextui-org/react";
import type * as React from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container xs css={{ paddingTop: 32, paddingBottom: 32 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
