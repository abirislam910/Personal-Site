import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header.js";
import {Nav} from './components/Nav.js';
import {Contact} from "./components/Pages/Contact.js";
import {BrowserRouter} from 'react-router-dom';
import {Home} from './components/Pages/Home.js';
import {Projects} from './components/Pages/Projects.js';
import styled from "styled-components";

const PageBox = styled.div`
`;

const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    z-index: 102;
    top: 0;
    left: 0;
    width: 100vw;
    background: #0C31F4;
`;

const HomeBox = styled.div`
    height: 90vh;
    width: 100vw;
    z-index: 10;
    background: linear-gradient(#0C31F4, #00A3FF, #3DD696, #3DD696, white);
    margin-left: -8px;
    margin-top: 9vh;
`;

const ContactBox = styled.div`
    height: 90vh;
    width: 100vw;
    z-index: 10;
    background: linear-gradient(white, #3DD696, #3DD696, #00A3FF, #0C31F4);
    margin-left: -8px;
    padding-top: 25vh;
`;

const ProjectBox = styled.div`

`;


export function App() {
    return(
        <BrowserRouter>
            <PageBox id="PageBox">
                <HeaderBox>
                    <Header/>
                    <Nav/>
                </HeaderBox>
                <HomeBox id="Home">
                    <Home />
                </HomeBox>
                <ProjectBox id="Projects">
                    <Projects />
                </ProjectBox>
                <ContactBox id="Contacts">
                    <Contact/>
                </ContactBox>
            </PageBox>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)