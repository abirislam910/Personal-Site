import { createGlobalStyle } from "styled-components";
import { theme, mq } from "./theme.js";

// Reset plus the handful of base rules the whole page relies on. Having a real
// reset here is what removes the negative-margin and 100vw workarounds the
// sections used to need.
export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :root {
        --header-height: ${theme.layout.headerHeight};
    }

    ${mq.sm} {
        :root {
            --header-height: ${theme.layout.headerHeightMobile};
        }
    }

    html {
        scroll-behavior: smooth;
        /* Anchored sections clear the fixed header without magic offsets. */
        scroll-padding-top: var(--header-height);
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;
        background: ${theme.color.surface};
        color: ${theme.color.ink};
        font-family: ${theme.font.body};
        font-size: 17px;
        line-height: 1.65;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* Sections are full-bleed; never let them create a sideways scrollbar. */
        overflow-x: hidden;
    }

    h1, h2, h3 {
        margin: 0;
        line-height: 1.15;
        letter-spacing: -0.02em;
        font-weight: 700;
    }

    p {
        margin: 0;
    }

    img {
        display: block;
        max-width: 100%;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button,
    input,
    textarea {
        font: inherit;
        color: inherit;
    }

    :focus-visible {
        outline: 3px solid ${theme.color.brandSoft};
        outline-offset: 3px;
        border-radius: ${theme.radius.sm};
    }

    ${mq.motion} {
        html {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
        }
    }
`;

export default GlobalStyle;
