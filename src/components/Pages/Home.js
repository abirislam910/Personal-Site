import React, { useState, useEffect } from "react";
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
    margin-top: -30px;
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

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX: x, clientY: y } = event;
            setPosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const moveStyle = {
        transform: `translate(${-((position.x - window.innerWidth / 2) / 80)}px, ${-((position.y - window.innerHeight / 2) / 80)}px)`,
        transition: 'transform 0.1s ease-out',
        position: 'absolute',
        top: '15%',
        left: '-1%',
        transformOrigin: 'center center',
        display: 'flex',
        flexDirection: 'row',
        placeContent: 'evenly'
      };

    return(
        <div style={moveStyle}>
            <StyleBoxIdk>
                <StyledImage id="profile-image" src={ProfilePic} alt="Me, Abir Islam, the subject of this website!"></StyledImage>
                <Gear id="gear-image" src={GearPic} alt="Just a gear lolz"></Gear>
            </StyleBoxIdk>
            <TextBox><strong><em>
                <StyledH1>Hi! My name's Abir.</StyledH1>
                <MainP> This website is a collection of my personal projects, showcasing the skills, creativity, and passion I pour into everything I build.
                        Whether you're interested in collaborating, learning more about the work I do, or just want to connect, feel free to reach out!</MainP>
                </em></strong>
            </TextBox>
        </div>
    )
}