import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import { Header } from "./components/Header.js";
import { Nav } from "./components/Nav.js";
import { Home } from "./components/Pages/Home.js";
import { Projects } from "./components/Pages/Projects.js";
import { Contact } from "./components/Pages/Contact.js";
import { Footer } from "./components/Footer.js";
import { GlobalStyle } from "./styles/GlobalStyle.js";
import { theme, mq } from "./styles/theme.js";

const Bar = styled.header`
    position: fixed;
    z-index: 50;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    height: var(--header-height);
    padding-inline: ${theme.layout.gutter};
    background: ${theme.color.brandTransparent};

    /* One row is too tight below ~540px, so the bar becomes two centred rows
       rather than shrinking the type to an unreadable size. */
    ${mq.sm} {
        flex-direction: column;
        justify-content: center;
        gap: 4px;
        padding-inline: 16px;
    }
`;

// Each section owns its own background, so the page reads as one continuous
// gradient: brand at the top, light through the middle, brand again at the end.
const HomeSection = styled.section`
    padding-top: var(--header-height);
    background: linear-gradient(
        180deg,
        ${theme.color.brand} 0%,
        ${theme.color.brandSoft} 90%,
        ${theme.color.surface} 100%
    );
`;

const ProjectsSection = styled.section`
    background: ${theme.color.surface};
`;

const ContactSection = styled.section`
    background: linear-gradient(
        180deg,
        ${theme.color.surface} 0,
        ${theme.color.brandSoft} 150px,
        ${theme.color.brand} 460px
    );
`;

export function App() {
    return (
        <>
            <GlobalStyle />
            <Bar>
                <Header />
                <Nav />
            </Bar>
            <main>
                <HomeSection id="Home">
                    <Home />
                </HomeSection>
                <ProjectsSection id="Projects">
                    <Projects />
                </ProjectsSection>
                <ContactSection>
                    <Contact />
                </ContactSection>
            </main>
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
