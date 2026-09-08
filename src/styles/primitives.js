import styled from "styled-components";
import { theme, mq } from "./theme.js";

// Shared width constraint. Sections stay full-bleed for their background while
// their content lines up on a single column.
export const Container = styled.div`
    width: 100%;
    max-width: ${theme.layout.maxWidth};
    margin: 0 auto;
    padding-inline: ${theme.layout.gutter};
`;

// Fluid type scale, so headings size themselves instead of relying on vw values
// that blow up on wide screens.
export const SectionTitle = styled.h2`
    font-size: clamp(1.9rem, 1.1rem + 2.4vw, 3rem);
    text-align: center;
    text-wrap: balance;
`;

export const SectionIntro = styled.p`
    margin-top: 16px;
    text-align: center;
    text-wrap: balance;
    font-size: 1.05rem;
    color: ${theme.color.inkSoft};

    ${mq.sm} {
        font-size: 1rem;
    }
`;
