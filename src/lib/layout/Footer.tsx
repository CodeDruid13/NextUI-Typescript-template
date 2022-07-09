import { Container, Link } from "@nextui-org/react";

const Footer = () => {
  return (
    <Container
      xs
      as="footer"
      css={{ paddingTop: 24, paddingBottom: 24, fontSize: "$tiny" }}
      display="flex"
      justify="center"
    >
      {new Date().getFullYear()} {" - "}
      <Link href="https://sznm.dev" target="_blank" rel="noopener noreferrer">
        sznm.dev
      </Link>
    </Container>
  );
};

export default Footer;
