import {Link} from "react-router-dom";
import styled from "styled-components";
import linked from "../media/linkedin.png";
import mail from "../media/mail.png";
import github from "../media/github.png";

/*
<MenuBox id="MenuBox">
    <Menu outerContainerId="MenuBox" pageWrapId="PageBox" width={500}>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
    </Menu>
</MenuBox>
*/

const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  height: 20%;
`;

const IconBox = styled.div`
    padding-left: 4%;
    width: 5%;
    display: flex;
    flex-direction: row;
`;

const Icon = styled.img`
    padding-top: 29px;
    max-width: 30px;
`;

const StyledH1 = styled.h1`
    padding-left: 25px;
    color: ghostwhite;
    font-size: 180%;
    margin-top: 18px;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: row;
    height: 80px;
`;

export function Header() {

    return (
        <header>
            <TextBox>
                <StyledH1>Abir Islam | </StyledH1>
                <IconBox>
                    <NavLink to={"https://www.linkedin.com/in/abir-islam-18a8331aa/"} target="_blank"><Icon src={linked} alt={"Linkedin"}/></NavLink> <br />
                    <NavLink to={"https://github.com/abirislam910"} target="_blank"><Icon src={github} alt={"Github"} style={{paddingLeft : "40%"}}/></NavLink> <br />
                    <NavLink to={"mailto:aislam99@bu.edu"} target="_blank"><Icon src={mail} alt={"Mail"} style={{paddingLeft : "40%"}}/></NavLink>
                </IconBox>
            </TextBox>
        </header>
    )
}