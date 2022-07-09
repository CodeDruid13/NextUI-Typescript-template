import { Button, Grid, Image, Link } from "@nextui-org/react";

const repoName = "nextarter-nextui";
const repoLink = `https://github.com/codedruid13/${repoName}`;

const CTASection = () => {
  return (
    <Grid.Container
      gap={1}
      alignItems="center"
      justify="center"
      css={{ flexDirection: "column" }}
    >
      <Grid css={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <Link
          aria-label="Deploy to Vercel"
          target="_blank"
          rel="noreferrer noopener"
          href={`https://vercel.com/import/git?s=${repoLink}`}
        >
          <Image
            showSkeleton
            src="https://vercel.com/button"
            alt="Vercel deploy button"
          />
        </Link>
        <Link
          aria-label="Deploy to Netlify"
          target="_blank"
          rel="noreferrer noopener"
          href={`https://app.netlify.com/start/deploy?repository=${repoLink}`}
        >
          <Image
            showSkeleton
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </Link>
      </Grid>

      <Grid>
        <Button
          as="a"
          href={`${repoLink}/generate`}
          target="_blank"
          rel="noreferrer noopener"
          color="gradient"
          shadow
          rounded
        >
          Use this Template
        </Button>
      </Grid>

      <Grid css={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Button
          as="a"
          href={repoLink}
          target="_blank"
          rel="noreferrer noopener"
          size="sm"
          rounded
          bordered
        >
          Open in Github
        </Button>
        <Link href={repoLink} target="_blank" rel="noreferrer noopener">
          <Image
            src={`https://img.shields.io/github/stars/codedruid13/${repoName}?style=social`}
            alt="github stars"
          />
        </Link>
      </Grid>
    </Grid.Container>
  );
};

export default CTASection;
