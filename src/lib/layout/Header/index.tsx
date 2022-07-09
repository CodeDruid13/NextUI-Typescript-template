import { Container, Row } from "@nextui-org/react";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Container xs css={{ paddingTop: 24, paddingBottom: 24 }}>
      <Row>
        <ThemeToggle />
      </Row>
    </Container>
  );
};

export default Header;
