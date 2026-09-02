import styled from "styled-components";
import { theme } from "../styles/theme.js";

// Not currently mounted — kept ready for when the page wants a closing line.
const StyledFooter = styled.footer`
    padding: 24px ${theme.layout.gutter};
    text-align: center;
    font-size: 0.88rem;
    color: ${theme.color.onBrandSoft};
`;

export function Footer() {
    return (
        <StyledFooter>
            <p>All Rights Reserved by Abir Islam, Copyright 2023</p>
        </StyledFooter>
    );
}

export default Footer;
