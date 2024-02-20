import React from "react";
import ProfilePic from "../../media/profile.jpg";
import styled from "styled-components";

const MainBox = styled.div`
    display: flex;
    flex-direction: row-reverse;
    padding: 2%;
    place-content: space-evenly;
`;

const TextBox = styled.div`
    width: 100%;
    padding-right: 4%;
    display: flex;
    flex-direction: column;
`;

const StyledH1 = styled.h1`
    text-align: center;
    color: rebeccapurple;
    text-decoration: underline;
`;

const MainP = styled.p`
    text-align: center;
    font-size: 130%;
    font-family: Georgia, serif;
`;

const StyledImage = styled.img`
    object-fit: cover;
    border-radius: 1.4rem;
    max-width: 95.5%;
    padding: 2%;
`;

const Box = styled.div`
  //styled component that makes use of an animated background gradient to produce an animated border
  border-radius: 1.4rem;
  text-align: center;
  --border-size: 10px;
  --border-angle: 0turn;
  margin-right: 1%;
  width: 50%;
  height: 50%;
  background-image: conic-gradient(
          from var(--border-angle),
          rgba(33, 33, 33, 0),
          rgba(17, 17, 17, 0) 100%,
          rgba(33, 33, 33, 0)
  ),
  conic-gradient(from var(--border-angle), transparent 10%, rebeccapurple, mediumpurple);
  background-size: calc(100% - (var(--border-size) * 2)) calc(100% - (var(--border-size) * 2)), cover;
  background-position: center center;
  background-repeat: no-repeat;
  animation: bg-spin 12s linear infinite;
  @keyframes bg-spin {
    to {
      --border-angle: 1turn;
    }
  }
@property --border-angle {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0turn;
}
`;

export function Home() {
    return(
        <main>
            <MainBox>
                <Box>
                    <StyledImage id="profile-image" src={ProfilePic} alt="Me, Abir Islam, the subject of this website!"></StyledImage>
                </Box>
                <TextBox>
                    <StyledH1>Hi, I'm Abir!</StyledH1>
                    <MainP> I'm a senior at <span style={{color: 'red'}}>Boston University</span> studying computer science and I've been programming in some form since I was in elementary school,
                        so to be able to turn this lifelong skill into a career is a big dream of mine! My biggest interests currently are <span style={{color: 'rebeccapurple'}}>
                        full-stack development and data analytics</span>, but the main thing I am looking for is a role that will allow me to learn and grow my skills to become a better
                        engineer. My goals are to secure a position at a company whose mission and work engage me both in terms of my personal interests as well
                        as intellectually and through hard work, grow as an engineer to a point where I could make a significant impact on the company as well as
                        on society. So, in short, if I were to have the opportunity to work with you, you can expect that I would take every opportunity to learn
                        and utilize my skills and make an impact everywhere I can. I created this website in Javascript using React in order to provide a more aesthetic view of my
                        resume, so feel free to browse through my work history, projects, and other related information. If you are interested in what I have to
                        offer, feel free to contact me using the information at the top of the page. Thank you!</MainP>
                </TextBox>
            </MainBox>
        </main>
    )
}