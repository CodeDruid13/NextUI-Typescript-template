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
      <Link
        href="https://obare.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Obare
      </Link>
    </Container>
  );
};

export default Footer;
