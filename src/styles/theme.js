// Central design tokens. Every component pulls colour, spacing and type from
// here so the site stays visually consistent as sections are added.

export const theme = {
    color: {
        brand: "#361f87",
        brandTransparent: "#361f87ee",
        brandDeep: "#ff9d00",
        brandSoft: "#6e35d9db",
        ink: "#100b20",
        inkSoft: "#605273",
        surface: "#f5edff",
        card: "#FFFFFF",
        line: "#E2E6F3",
        onBrand: "#F8F8FF",
        onBrandSoft: "rgba(248, 248, 255, 0.78)",
    },
    font: {
        body: "'Ubuntu', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    },
    radius: {
        sm: "8px",
        md: "14px",
        lg: "24px",
        pill: "999px",
    },
    shadow: {
        sm: "0 1px 2px rgba(11, 16, 32, 0.06)",
        md: "0 12px 32px rgba(11, 16, 32, 0.10)",
        lg: "0 28px 64px rgba(11, 16, 32, 0.20)",
    },
    layout: {
        maxWidth: "1140px",
        gutter: "clamp(20px, 5vw, 48px)",
        // The bar stacks into two rows on small screens; both values are
        // published as the --header-height CSS variable in GlobalStyle.
        headerHeight: "68px",
        headerHeightMobile: "92px",
    },
};

// Max-width breakpoints, written as helpers so media queries read the same
// way everywhere: ${mq.md} { ... }
export const mq = {
    lg: "@media (max-width: 1024px)",
    md: "@media (max-width: 768px)",
    sm: "@media (max-width: 540px)",
    motion: "@media (prefers-reduced-motion: reduce)",
};

export default theme;
