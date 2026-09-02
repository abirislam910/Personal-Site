import styled from "styled-components";
import { theme, mq } from "../styles/theme.js";
import linked from "../media/linkedin.png";
import mail from "../media/mail.png";
import github from "../media/github.png";

const SOCIALS = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/abir-islam-18a8331aa/",
        icon: linked,
    },
    {
        label: "GitHub",
        href: "https://github.com/abirislam910",
        icon: github,
    },
    {
        label: "Email",
        href: "mailto:aislam99@bu.edu",
        icon: mail,
    },
];

const Brand = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    min-width: 0;

    ${mq.sm} {
        gap: 10px;
    }
`;

const Wordmark = styled.span`
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: ${theme.color.onBrand};
    white-space: nowrap;

    ${mq.sm} {
        font-size: 1rem;
    }
`;

const Divider = styled.span`
    width: 1px;
    height: 22px;
    background: ${theme.color.onBrandSoft};
    opacity: 0.5;

    ${mq.sm} {
        height: 18px;
    }
`;

const SocialList = styled.ul`
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0;
    padding: 0;
    list-style: none;

    ${mq.sm} {
        gap: 8px;
    }
`;

const SocialLink = styled.a`
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: ${theme.radius.sm};
    opacity: 0.85;
    transition: opacity 0.2s ease, background-color 0.2s ease, transform 0.2s ease;

    &:hover {
        opacity: 1;
        background: rgba(248, 248, 255, 0.16);
        transform: translateY(-1px);
    }

    ${mq.sm} {
        width: 28px;
        height: 28px;
    }
`;

const Icon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;

    ${mq.sm} {
        width: 17px;
        height: 17px;
    }
`;

export function Header() {
    return (
        <Brand>
            <Wordmark>Abir Islam</Wordmark>
            <Divider aria-hidden="true" />
            <SocialList>
                {SOCIALS.map(({ label, href, icon }) => (
                    <li key={label}>
                        <SocialLink
                            href={href}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={label}
                            title={label}
                        >
                            <Icon src={icon} alt="" aria-hidden="true" />
                        </SocialLink>
                    </li>
                ))}
            </SocialList>
        </Brand>
    );
}

export default Header;
