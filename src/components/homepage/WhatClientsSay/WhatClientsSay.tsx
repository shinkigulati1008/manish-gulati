/** @jsxImportSource @emotion/react */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React, { useState } from "react";
import backgroundImg from "../../../assets/bg-1.webp";
import styles from "./WhatClientsSay.styles";
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Card, CardContent } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/autoplay';

SwiperCore.use([Navigation, Autoplay, Pagination]);

const testimonialData = [
  {
    id: 1,
    content: "I had an amazing experience with Manish from Barfoot & Thompson. He understands his customers and their needs and that's what we really liked about him. His communication skills were excellent and he worked really hard to find the perfect property for us. I appreciate his efforts and thank him for the work he has done. I would definitely consider him for any future property dealings.",
    author: "Suresh",
  },
  {
    id: 2,
    content: "We just purchased a property at Huapai via Manish and would like to show our appreciation to the way Manish facilitated the whole process. We were in the market for about four months through different salespeople and not getting anywhere. That's when our mortgage broker recommended Manish. We contacted Manish and in a couple of weeks, found a place we liked. Manish kept the process simple and transparent. He was always available to take our calls and explain things as many times as required, to property market newbies like myself and my wife. Not just the sale process, but Manish also helped us find a lawyer who was fantastic at every point of the process. Overall, we would not hesitate to recommend Manish to our friends and hope he has a long successful career - so that he would be available to help with any of our future property decisions.",
    author: "Manoj Rajagopal",
  },
  {
    id: 3,
    content: "I would like to say thank you to Manish Gulati and the team, for helping me with finding a mind-blowing five bed-room brand new home, here in Papakura, for a very decent price. It was very hard finding such a home, but Manish went out of his way, showed us a very nice house which we liked from the first viewing. Thank you for your great help and support Manish.",
    author: "Ashneel Chand",
  },
  {
    id: 4,
    content: "We have just purchased our first home here in Auckland. Manish was the salesperson who helped us with the process. He was a wonderful help, always smiling and polite in his conversations. He made it all really simple for us. He was always available to talk to when we called him. He understood our needs really well and presented the houses which were according to our expectations. Would give him full stars and for sure we will be dealing with him the next time.",
    author: "Saurabh Vashisht",
  },
  {
    id: 5,
    content: "We found Manish very helpful. Our situation involved several owners, so there was a lot more work involved. We were kept up-to-date on viewings and received excellent feedback. First time choosing to do an auction and we were again informed of the process from start to finish. Manish was reliable, friendly and very professional",
    author: "Sharron Rusden",
  },
  {
    id:6,
    content: "Manish made our home-buying experience a breeze! His expertise in the New Zealand real estate market and personalized approach were outstanding. He went above and beyond to find us the perfect home. Highly recommended!",
    author: "Emily Stevens",
  }
];

export default function WhatClientsSay() {
  const [expandedTestimonials, setExpandedTestimonials] = useState<number[]>([]);

  const handleToggleExpand = (testimonialId: number) => {
    setExpandedTestimonials((prevExpanded) =>
      prevExpanded.includes(testimonialId)
        ? prevExpanded.filter((id) => id !== testimonialId)
        : [...prevExpanded, testimonialId]
    );
  };

  const swiperOptions = {
    loop: true,
    speed: 500,
    spaceBetween: 20,
    navigation: true,
    pagination: {
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 2,
      renderBullet: function (index: number, className: string) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
      renderFraction: function (currentClass: string, totalClass: string) {
        return '<span class="' + currentClass + '"></span>' +
          '<span class="' + totalClass + '"></span>';
      }
    },
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    centeredSlides: false,
    breakpoints: {
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 1,
        }
      },      
  };
  return (
    <Container maxWidth="xl" sx={styles.container}>
      <Typography variant="h3" component="div" gutterBottom sx={styles.title}>
        What My Clients Say
      </Typography>
      <Swiper {...swiperOptions} style={styles.swiperContainer} >
        {testimonialData.map((testimonial) => (
          <SwiperSlide key={testimonial.id} style={styles.swiperSlide}>
            <Card sx={styles.card}>
              <CardContent>
                <Avatar sx={styles.avatar}>
                  <PersonIcon />
                </Avatar>
                <Typography variant="body2" color="text.secondary" sx={styles.content}>
                  {expandedTestimonials.includes(testimonial.id)
                      ? testimonial.content // Display full content if expanded
                      : `${testimonial.content.slice(0, 250)}...`} 
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  - {testimonial.author}
                </Typography>
                <div
                  onClick={() => handleToggleExpand(testimonial.id)}
                  style={{ cursor: 'pointer', color: 'blue' }}
                >
                  {expandedTestimonials.includes(testimonial.id as number) ? 'Read Less' : 'Read more'}
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
  </Container>
  );
}
