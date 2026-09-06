import React from "react";
import styled from "styled-components";
import ProfilePic from "../../media/profile2.png";
import GearPic from "../../media/gear.png";
import { Container } from "../../styles/primitives.js";
import { theme, mq } from "../../styles/theme.js";
import { usePointerParallax } from "../../hooks/usePointerParallax.js";

const Hero = styled(Container)`
    max-width: min(max(${theme.layout.maxWidth}, 80vw), 2000px);
    display: grid;
    grid-template-columns: minmax(0, 6fr) minmax(0, 7fr);
    align-items: center;
    gap: clamp(24px, 5vw, 72px);
    min-height: calc(100vh - var(--header-height));
    padding-bottom: clamp(48px, 10vh, 160px);

    ${mq.lg} {
        grid-template-columns: minmax(0, 1fr);
        justify-items: center;
        text-align: center;
        gap: 32px;
    }
`;

// Both layers drift with the pointer; the portrait moves further than the text
// so the two read as separate planes.
const Portrait = styled.div`
    position: relative;
    width: 130%;
    right: 20%;
    max-width: 700px;
    transform: translate3d(
        calc(var(--parallax-x, 0px) * 1.6),
        calc(var(--parallax-y, 0px) * 1.6),
        0
    );
    transition: transform 0.2s ease-out;

    /* Soft halo that lifts the cut-out portrait off the gradient. */
    &::before {
        content: "";
        position: absolute;
        inset: 6% 4% -4%;
        border-radius: 50%;
        background: radial-gradient(
            circle at 50% 55%,
            rgba(248, 248, 255, 0.30),
            rgba(248, 248, 255, 0) 68%
        );
    }

    ${mq.lg} {
        max-width: 360px;
    }

    ${mq.sm} {
        max-width: 280px;
    }
`;

const Photo = styled.img`
    position: relative;
    z-index: 2;
    width: 100%;
    filter: drop-shadow(0 24px 40px rgba(6, 14, 70, 0.35));
`;

const Gear = styled.img`
    position: absolute;
    z-index: 1;
    top: 5%;
    right: 10%;
    width: 44%;
    opacity: 0.36;
    animation: heroGearSpin 34s linear infinite;

    @keyframes heroGearSpin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    ${mq.lg} {
        right: -12%;
        width: 46%;
    }
`;

const Copy = styled.div`
    min-width: 0;
    color: ${theme.color.onBrand};
    transform: translate3d(
        calc(var(--parallax-x, 0px) * 0.5),
        calc(var(--parallax-y, 0px) * 0.5),
        0
    );
    transition: transform 0.2s ease-out;
`;

const Title = styled.h1`
    font-size: clamp(2.1rem, 3rem + 1vw, 4rem);
    text-wrap: balance;
`;

const Lede = styled.p`
    max-width: 54ch;
    margin-top: 24px;
    font-size: clamp(1.05rem, 1.1rem + 0.55vw, 2rem);
    line-height: 1.7;
    color: rgba(248, 248, 255, 0.9);

    ${mq.lg} {
        margin-inline: auto;
    }
`;

export function Home() {
    const parallaxRef = usePointerParallax(14);

    return (
        <Hero ref={parallaxRef}>
            <Portrait>
                <Gear src={GearPic} alt="" aria-hidden="true" />
                <Photo src={ProfilePic} alt="Abir Islam" />
            </Portrait>
            <Copy>
                <Title>Hi! My name&apos;s Abir.</Title>
                <Lede>
                    This website is a collection of my personal projects, showcasing the
                    skills, creativity, and passion I pour into everything I build.
                    Whether you&apos;re interested in collaborating, learning more about
                    the work I do, or just want to connect, feel free to reach out!
                </Lede>
            </Copy>
        </Hero>
    );
}

export default Home;