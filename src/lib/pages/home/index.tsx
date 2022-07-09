import { Grid } from "@nextui-org/react";

import CTASection from "lib/components/samples/CTASection";
import SomeText from "lib/components/samples/SomeText";

const Home = () => {
  return (
    <Grid.Container
      gap={8}
      alignItems="center"
      justify="center"
      css={{ minHeight: "70vh", flexDirection: "column" }}
    >
      <SomeText />
      <CTASection />
    </Grid.Container>
  );
};

export default Home;
