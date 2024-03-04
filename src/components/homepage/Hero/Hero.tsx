/** @jsxImportSource @emotion/react */
import Facebook from "@mui/icons-material/Facebook";
import House from "@mui/icons-material/House";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon/SvgIcon";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroImg from "../../../assets/banner.jpg";
import mobileHeroImg from "../../../assets/mobile-hero.jpg";
import styles from "./Hero.styles";

interface Icon {
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
    type?: { render: { displayName: string } };
  };
  href: string;
}

export default function Hero() {
  const renderSocials = (): Array<React.ReactNode> => {
    const components: Array<Icon> = [
      {
        icon: Facebook,
        href: "https://www.facebook.com/ManishGulati44",
      },
      {
        icon: LinkedIn,
        href: "https://www.linkedin.com/in/manish-gulati-15701823/",
      },
      {
        icon: House,
        href: "https://www.barfoot.co.nz/our-people/m.gulati#?tab=Properties",
      },
    ];

    return components.map((item, idx) => {
      const id: string | number = item.icon.type?.render.displayName || idx,
        Component = item.icon;

      return (
        <Link key={`social-${id}`} href={item.href} target="_blank">
          <Component sx={styles.socialIconSx} fontSize="large" />
        </Link>
      );
    });
  };

  return (
    <Grid id="home" css={styles.root}>
      <Grid css={styles.heroImg} sx={styles.heroImgSx}>
        <Image
          id="hero-img"
          src={heroImg}
          alt="home background"
          fill
          priority
        />
        <Image id="mobile-hero-img" src={mobileHeroImg} alt="" fill priority />
      </Grid>
      <Container css={styles.heroBand} maxWidth="md">
        <div css={styles.heroHeading}>
          <Typography variant="h5" fontWeight={600} color="secondary.dark">
              Let us assist you in making savvy real estate investments.
          </Typography>
        </div>
        <Link href="/#services" css={styles.ctaButton}>
          <Button variant="contained" size="large">
            Get started
          </Button>
        </Link>
      </Container>
      <Container
        css={styles.socialsWrapper}
        sx={styles.socialsWrapperSx}
        maxWidth="xl"
      >
        <Grid css={styles.socials} sx={styles.socialsSx}>
          {renderSocials()}
        </Grid>
      </Container>
    </Grid>
  );
}
