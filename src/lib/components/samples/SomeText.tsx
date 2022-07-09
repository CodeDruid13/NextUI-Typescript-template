import { Grid, Text } from "@nextui-org/react";

const SomeText = () => {
  return (
    <Grid css={{ textAlign: "center" }}>
      <Text h1 size={32} css={{ textGradient: "45deg, $red600, $blue600" }}>
        nextarter-nextui
      </Text>
      <Text css={{ opacity: 0.6 }}>
        This is a Next.js project with Next-UI and TypeScript setup.
      </Text>
    </Grid>
  );
};

export default SomeText;
