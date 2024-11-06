import React, {useState} from "react";
import {Link} from "react-router-dom";
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
                <NavLink to="/aislam99/resume/build/Projects">
                    Projects
                </NavLink>
                <NavLink to="/aislam99/resume/build/Contact">
                    Contact
                </NavLink>
        </StyledNav>
    )
}