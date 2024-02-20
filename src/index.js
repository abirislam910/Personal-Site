import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header.js";
import {Nav} from './components/Nav.js';
import {Footer} from "./components/Footer.js";
import {Routes, Route, BrowserRouter}
    from 'react-router-dom';
import {Home} from './components/Pages/Home.js';
import {Education} from './components/Pages/Education.js';
import {Experience} from './components/Pages/Experience.js';
import {Extras} from './components/Pages/Extras.js';
import {Projects} from './components/Pages/Projects.js';
import {Credits} from "./components/Pages/Credits";
import styled from "styled-components";

const PageWrapper = styled.div`
    padding-left: 1%;
`;

const HeaderBox = styled.div`
    background-color: mediumpurple;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 1%;
`;

export function App() {
    return(
        <BrowserRouter>
            <HeaderBox>
                <Header/>
                <Nav/>
            </HeaderBox>
            <PageWrapper>
                <Routes>
                    <Route path='/aislam99/resume/build/index.html'  element={<Home />} />
                    <Route path='/aislam99/resume/build/Home'  element={<Home />} />
                    <Route path='/aislam99/resume/build/Education' element={<Education />} />
                    <Route path='/aislam99/resume/build/Experience' element={<Experience />} />
                    <Route path='/aislam99/resume/build/Extracurriculars' element={<Extras />} />
                    <Route path='/aislam99/resume/build/Projects' element={<Projects />} />
                    <Route path='/aislam99/resume/build/Credits' element={<Credits />} />
                </Routes>
            </PageWrapper>
            <br></br>
            <Footer />
            <br></br>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)