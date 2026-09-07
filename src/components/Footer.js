import styled from "styled-components";
import { theme, mq } from "../styles/theme.js";

const StyledFooter = styled.footer`
    /* Continues the deep end of the contact gradient rather than sitting on
       the light page background. */
    background: ${theme.color.brand};
    padding: 32px ${theme.layout.gutter} 40px;
    text-align: center;
    color: ${theme.color.onBrandSoft};
`;

const Copyright = styled.p`
    font-size: 0.88rem;
`;

// The contact form is the only place the site touches personal data, so it is
// the only thing worth disclosing here.
const FinePrint = styled.p`
    max-width: 60ch;
    margin: 12px auto 0;
    font-size: 0.76rem;
    line-height: 1.6;
    color: rgba(248, 248, 255, 0.6);

    ${mq.sm} {
        font-size: 0.72rem;
    }
`;

export function Footer() {
    return (
        <StyledFooter>
            <Copyright>© {new Date().getFullYear()} Abir Islam</Copyright>
            <FinePrint>
                Messages sent through the contact form are delivered by EmailJS. This
                site sets no cookies and uses no analytics or tracking.
            </FinePrint>
        </StyledFooter>
    );
}

export default Footer;
