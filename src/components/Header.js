import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import linked from "../media/linkedin.png";
import mail from "../media/mail.png";
import github from "../media/github.png";

const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  height: 20%;
`;

const IconBox = styled.div`
    padding-left: 5%;
    width: 5%;
    display: flex;
    flex-direction: row;
`;

const Icon = styled.img`
    padding-top: 30px;
    max-width: 25px;
`;

const StyledH1 = styled.h1`
    padding-left: 10px;
    text-align: center;
    color: ghostwhite;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: row;
`;

export function Header({button}) {
    let Location = useLocation().pathname.substring(23);

    if (Location === "index.html") {
        Location = "Home";
    }

    return (
        <header>
            <TextBox>
                <StyledH1><em><strong>Abir Islam | {Location}</strong></em></StyledH1>
                <IconBox><NavLink to={"https://www.linkedin.com/in/abir-islam-18a8331aa/"} target="_blank"><Icon src={linked} alt={"Linkedin"}/></NavLink> <br />
                    <NavLink to={"https://github.com/abirislam910"} target="_blank"><Icon src={github} alt={"Github"} style={{paddingLeft : "40%"}}/></NavLink> <br />
                    <NavLink to={"mailto:aislam99@bu.edu"} target="_blank"><Icon src={mail} alt={"Mail"} style={{paddingLeft : "80%"}}/></NavLink>
                </IconBox>
            </TextBox>
        </header>
    )
}