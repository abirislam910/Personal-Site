import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {styled} from "styled-components";
import "../css/nav.css";

const StyledNav = styled.nav`
  float: right;
  align-self: center;
  background: mediumpurple;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
`;

const NavMenu = styled.div`
    padding-right: 3%;
`;

export function Nav({loggedIn}) {

    const Location = useLocation().pathname.substring(49);

    const [active, setActive] = useState("Home")

    function changePage(page) {
        setActive(page)
    }

    return (
        <StyledNav>
            <NavMenu>
                <NavLink to="/aislam99/resume/build/Home" activeStyle onClick={() => changePage('Home')} className={active === 'Home' ? 'active' : 'inactive'}>
                    Home
                </NavLink>
                <NavLink to="/aislam99/resume/build/Projects" activeStyle onClick={() => changePage('Projects')} className={active === 'Projects' ? 'active' : 'inactive'}>
                    Projects
                </NavLink>
                <NavLink to="/aislam99/resume/build/Experience" onClick={() => changePage('Experience')} className={active === 'Experience' ? 'active' : 'inactive'}>
                    Experience
                </NavLink>
                <NavLink to="/aislam99/resume/build/Education" activeStyle onClick={() => changePage('Education')} className={active === 'Education' ? 'active' : 'inactive'}>
                    Education
                </NavLink>
                <NavLink to="/aislam99/resume/build/Extracurriculars" activeStyle onClick={() => changePage('Extracurriculars')} className={active === 'Extracurriculars' ? 'active' : 'inactive'}>
                    Extracurriculars
                </NavLink>
            </NavMenu>
        </StyledNav>
    )
}