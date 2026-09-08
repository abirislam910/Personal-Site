import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { theme, mq } from "../styles/theme.js";
import { useActiveSection } from "../hooks/useActiveSection.js";

const SECTIONS = [
    { id: "Home", label: "Home" },
    { id: "Projects", label: "Projects" },
    { id: "Contacts", label: "Contact" },
];

const SECTION_IDS = SECTIONS.map((section) => section.id);

const FALLBACK_HEADER_HEIGHT = parseInt(theme.layout.headerHeight, 10);

// The bar is one row on desktop and two on mobile, so its height comes from the
// --header-height variable rather than a constant that could fall out of step.
function readHeaderHeight() {
    if (typeof window === "undefined") return FALLBACK_HEADER_HEIGHT;
    const raw = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue("--header-height");
    return parseInt(raw, 10) || FALLBACK_HEADER_HEIGHT;
}

function useHeaderHeight() {
    const [height, setHeight] = useState(FALLBACK_HEADER_HEIGHT);

    useEffect(() => {
        const update = () => setHeight(readHeaderHeight());
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return height;
}

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const NavLink = styled(Link)`
    position: relative;
    padding: 8px 14px;
    border-radius: ${theme.radius.pill};
    font-size: 0.95rem;
    font-weight: ${({ $active }) => ($active ? 500 : 400)};
    color: ${({ $active }) =>
        $active ? theme.color.onBrand : theme.color.onBrandSoft};
    cursor: pointer;
    white-space: nowrap;
    transition: color 0.2s ease, background-color 0.2s ease;

    &:hover {
        color: ${theme.color.onBrand};
        background: rgba(248, 248, 255, 0.12);
    }

    /* Underline marking the section currently on screen. */
    &::after {
        content: "";
        position: absolute;
        left: 14px;
        right: 14px;
        bottom: 2px;
        height: 2px;
        border-radius: ${theme.radius.pill};
        background: ${theme.color.onBrand};
        opacity: ${({ $active }) => ($active ? 1 : 0)};
        transition: opacity 0.2s ease;
    }

    ${mq.sm} {
        padding: 6px 12px;
        font-size: 0.88rem;

        &::after {
            left: 12px;
            right: 12px;
        }
    }
`;

export function Nav() {
    const headerHeight = useHeaderHeight();
    const activeId = useActiveSection(SECTION_IDS, headerHeight);

    return (
        <StyledNav aria-label="Section navigation">
            {SECTIONS.map(({ id, label }) => (
                <NavLink
                    key={id}
                    to={id}
                    smooth={true}
                    duration={300}
                    offset={-headerHeight}
                    $active={activeId === id}
                    aria-current={activeId === id ? "true" : undefined}
                >
                    {label}
                </NavLink>
            ))}
        </StyledNav>
    );
}

export default Nav;
