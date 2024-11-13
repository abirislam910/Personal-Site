import React from "react";
import {Link} from "react-scroll";
import {styled} from "styled-components";
import "../css/nav.css";

const StyledNav = styled.nav`
  float: right;
  align-self: center;
  padding-right: 10px;
`;

const NavLink = styled(Link)`
    color: ghostwhite;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
`;

export function Nav() {

    return (
        <StyledNav>
                <NavLink to="Home" smooth={true} duration={500} offset={-80}>
                    Home
                </NavLink>
                <NavLink to="Projects" smooth={true} duration={500} offset={-60}>
                    Projects
                </NavLink>
                <NavLink to="Contacts" smooth={true} duration={500} offset={130}>
                    Contact
                </NavLink>
        </StyledNav>
    )
}