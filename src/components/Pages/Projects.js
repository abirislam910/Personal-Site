import React from 'react';
import styled from "styled-components";
import MailIcon from "../../media/profile2.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PageBox = styled.div`
    display: flex;
    flex-direction: column;
    place-content: space-evenly;
    justify-content: center;
    padding: 50px;
    margin-top: 100px;
    margin-bottom: 200px;
`;

const Box = styled.div`
    width: 400px;          /* Width of the box */
    height: 400px;         /* Height of the box */
    background-color: #f0f0f0; /* Background color of the box */
    border: 5px solid #ccc; /* Border color and width */
    border-radius: 15px;   /* Radius of rounded corners */
    margin: 10px;
    box-shadow: 0px 14px 18px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
`;

const Title = styled.h1`
    align-self: center;
    font-size: 4vw;
`;

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export function Projects() {
  return (
    <PageBox>
        <Title>Here are some projects I've worked on!</Title>
        <Carousel responsive={responsive}>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </Carousel>
    </PageBox>
  );
}