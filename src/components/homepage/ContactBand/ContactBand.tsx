/** @jsxImportSource @emotion/react */
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import styles, { propStyles } from "./ContactBand.styles";

export default function ContactBand() {
  return (
    <Container id="contact" css={styles.root} maxWidth="xl">
      <Grid container sx={styles.containerSx} spacing={propStyles.spacing}>
        <Grid item sm={6}>
          <Typography variant="h5" gutterBottom>
            Get in Touch
          </Typography>
          <Typography>
            Navigating the home-buying process can pose its challenges, but with us by your side, we simplify the journey. Reach out today via call or email, and let's make finding your dream home a straightforward and enjoyable experience.
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="h5" gutterBottom>
            Contact Details
          </Typography>
          <Typography css={styles.textIcon} gutterBottom>
            <Phone color="primary" />
            Phone: +64 21 222 6358
          </Typography>
          <Typography css={styles.textIcon}>
            <Email color="primary" />
            Email: m.gulati@barfoot.co.nz 
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
