/** @jsxImportSource @emotion/react */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import backgroundImg from "../../../assets/bg-1.webp";
import manishImg from "../../../assets/manish.jpg";
import styles from "./StatisticsBand.styles";

export default function StatisticsBand() {
  return (
    <div id="about" css={styles.root}>
      <Container maxWidth="xl">
        <Image
          css={styles.backgroundImg}
          src={backgroundImg}
          alt="background"
          fill
        />
        <Grid container spacing={8}>
          <Grid item md={6}>
            <Image css={styles.image} src={manishImg} alt="Manish Gulati" />
          </Grid>
          <Grid item md={6}>
            <div css={styles.infoBlock}>
              <Typography variant="h3" gutterBottom>
                About Manish Gulati
              </Typography>
              <Typography>
                What I love most about real estate, is the opportunity to meet new people and to share their journey of finding a ‘home’. Sharing in my client’s happiness is rewarding both professionally and personally.
              </Typography>
              <Typography>
                  Barfoot & Thompson is not only the leading real estate agency in Auckland, but is well known for its warm, people-oriented culture. They have incorporated the values of People, Family, Diversity and Community into their working environment and for me, this was a big draw-card.
              </Typography>
              <Typography>
                After qualifying with an Advanced Graduate Diploma in Business, I worked in sales for more than 10 years before joining Barfoot & Thompson. In this time, very quickly, I learned the value of understanding my client’s needs, clear communication and meeting their requirements in every way possible. Receiving an award as one of the top 10 salespeople in Australia and New Zealand is something of which I am particularly proud. Also, winning a number of company appreciation awards confirmed my value as a salesperson.
              </Typography>
              <Typography>
                  I’ve lived on the Shore for a few years and still have friends and family there. I am currently living in South Auckland and I love my neighbourhood and the local community. I am a fluent English, Hindi and Punjabi speaker which works so well with the diverse ethnic cultures in this great country of ours.
              </Typography>
              <Typography>
                  Outside of work, spending time with family and playing cricket are top of my list.
              </Typography>
              <Typography>
                  I believe that success comes in many ways. Being client’s go-to person is a measure of my success. Call or email me at Barfoot & Thompson Papakura to begin your journey to success together!
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={4}>
                  <Typography
                    css={styles.statNum}
                    variant="h5"
                    component="p"
                    color="primary"
                  >
                    36+
                  </Typography>
                  <Typography>Projects Done</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    css={styles.statNum}
                    variant="h5"
                    component="p"
                    color="primary"
                  >
                    100+
                  </Typography>
                  <Typography>Happy Clients</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    css={styles.statNum}
                    variant="h5"
                    component="p"
                    color="primary"
                  >
                    2+
                  </Typography>
                  <Typography>For sale</Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
