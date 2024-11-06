import React from "react";
import ProfilePic from "../../media/profile2.png";
import GearPic from "../../media/gear.png";
import styled from "styled-components";

const MainBox = styled.div`
    display: flex;
    flex-direction: row;
    place-content: space-evenly;
    padding-top: 9vh;
`;

const TextBox = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    place-content: space-evenly;
    color: ghostwhite;
    padding-left: 3.5vw;
    padding-right: 4vw;
`;

const StyledH1 = styled.h1`
    text-decoration: underline;
    font-size: 400%;
`;

const MainP = styled.p`
    font-size: 130%; 
`;

const StyledImage = styled.img`
    position: relative;
    z-index: 101;
    max-width: 100%;
`;

const StyleBoxIdk = styled.div`
    position: relative;
    max-width: 40%;
`;

const Gear = styled.img`
    position: absolute;
    z-index: 100;
    left: 15vw;
    top: 5vh;
    max-width: 60%;
    animation: rotation 30s infinite linear;

    @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;



export function Home() {
    return(
        <MainBox>
            <StyleBoxIdk>
                <StyledImage id="profile-image" src={ProfilePic} alt="Me, Abir Islam, the subject of this website!"></StyledImage>
                <Gear id="gear-image" src={GearPic} alt="Just a gear lolz"></Gear>
            </StyleBoxIdk>
            <TextBox><strong><em>
                <StyledH1>Hi! My name's Abir.</StyledH1>
                <MainP> I'm a senior at Boston University studying computer science and I've been programming in some form since I was in elementary school,
                        so to be able to turn n</MainP>
                </em></strong>
            </TextBox>
        </MainBox>
    )
}