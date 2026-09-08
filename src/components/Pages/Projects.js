import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import Popup from "reactjs-popup";
import "react-multi-carousel/lib/styles.css";
import { projects } from "../../data/projects.js";
import { Container, SectionTitle } from "../../styles/primitives.js";
import github from "../../media/github.png";
import { theme, mq } from "../../styles/theme.js";

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const Section = styled(Container)`
    padding-block: clamp(64px, 12vh, 128px);
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

// Restyles react-multi-carousel's own arrow and dot classes so the control
// chrome matches the rest of the page instead of the library default.
const CarouselFrame = styled.div`
    margin-top: clamp(32px, 5vh, 56px);

    .carousel-item {
        padding: 8px 12px 48px;
    }

    .react-multiple-carousel__arrow {
        top: 93%;
        min-width: 40px;
        min-height: 30px;
        z-index: 10;
        background: ${theme.color.card};
        border: 1px solid ${theme.color.line};
        transition: background-color 0.2s ease
    }

    .react-multiple-carousel__arrow:hover {
        background: ${theme.color.brand};
        transform: scale(1.05);
    }

    .react-multiple-carousel__arrow::before {
        color: ${theme.color.brand};
        font-size: 16px;
        font-weight: 700;
    }

    .react-multiple-carousel__arrow:hover::before {
        color: ${theme.color.onBrand};
    }

    .react-multi-carousel-dot button {
        border-color: ${theme.color.line};
        background: ${theme.color.line};
    }

    .react-multi-carousel-dot--active button {
        border-color: ${theme.color.brand};
        background: ${theme.color.brand};
    }
`;

const Card = styled.button`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0;
    overflow: hidden;
    text-align: left;
    background: ${theme.color.card};
    border: 1px solid ${theme.color.line};
    border-radius: ${theme.radius.lg};
    box-shadow: ${theme.shadow.sm};
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;

    &:hover {
        transform: translateY(-6px);
        border-color: ${theme.color.brandSoft};
        box-shadow: ${theme.shadow.md};
    }
`;

// Stands in for a screenshot until real project imagery exists.
const CardCover = styled.div`
    position: relative;
    aspect-ratio: 16 / 10;
    background: linear-gradient(
        135deg,
        ${theme.color.brand} 0%,
        ${theme.color.brandSoft} 100%
    );

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background-image: radial-gradient(
            rgba(248, 248, 255, 0.22) 1px,
            transparent 1px
        );
        background-size: 14px 14px;
    }
`;

const CardCoverImage = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 8px;
    padding: 22px;
`;

const CardTitle = styled.h3`
    font-size: 1.2rem;
`;

const CardBlurb = styled.p`
    flex: 1;
    font-size: 0.95rem;
    color: ${theme.color.inkSoft};
`;

const CardAction = styled.span`
    margin-top: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    color: ${theme.color.brand};

    ${Card}:hover & {
        text-decoration: underline;
        color: ${theme.color.brandDeep};
    }
`;

const TagRow = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const Tag = styled.li`
    padding: 4px 12px;
    font-size: 0.82rem;
    color: ${theme.color.brand};
    background: rgba(12, 49, 244, 0.08);
    border-radius: ${theme.radius.pill};
`;

const Modal = styled(Popup)`
    &-overlay {
        background: rgba(11, 16, 32, 0.55);
        backdrop-filter: blur(3px);
    }

    &-content {
        width: min(560px, calc(100vw - 32px));
        max-height: 85vh;
        overflow-y: auto;
        overscroll-behavior: contain;
        padding: clamp(24px, 4vw, 36px);
        background: ${theme.color.card};
        border: 1px solid ${theme.color.line};
        border-radius: ${theme.radius.lg};
        box-shadow: ${theme.shadow.lg};
    }
`;

const ModalHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
`;

const ModalTitle = styled.h3`
    font-size: clamp(1.35rem, 1.1rem + 0.9vw, 1.75rem);
`;

const CloseButton = styled.button`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    width: 34px;
    height: 34px;
    font-size: 1.3rem;
    line-height: 1;
    color: ${theme.color.inkSoft};
    background: transparent;
    border: 1px solid ${theme.color.line};
    border-radius: ${theme.radius.pill};
    cursor: pointer;
    transition: color 0.2s ease, background-color 0.2s ease;

    &:hover {
        color: ${theme.color.ink};
        background: ${theme.color.surface};
    }
`;

const ModalBody = styled.p`
    margin-top: 16px;
    color: ${theme.color.inkSoft};
`;

const ModalFooter = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    margin-top: 24px;
`;

const ModalLink = styled.a`
    padding: 10px 20px;
    font-size: 0.95rem;
    font-weight: 500;
    color: ${theme.color.onBrand};
    background: ${theme.color.brand};
    border-radius: ${theme.radius.pill};
    transition: background-color 0.2s ease;

    &:hover {
        background: ${theme.color.brandDeep};
    }
`;

const ModalTags = styled(TagRow)`
    margin-top: 18px;
`;

function ProjectCard({ project }) {
    return (
        <Modal
            modal
            closeOnDocumentClick
            closeOnEscape
            trigger={
                <Card type="button" aria-label={`Read more about ${project.title}`}>
                    {project.cover ? (
                        <CardCoverImage
                            src={project.cover}
                            alt={project.title}
                        />
                    ) : (
                        <CardCover aria-hidden="true" />
                    )}
                    <CardBody>
                        <CardTitle>{project.title}</CardTitle>
                        <CardBlurb>{project.blurb}</CardBlurb>
                        {project.tags?.length > 0 && (
                            <TagRow>
                                {project.tags.map((tag) => (
                                    <Tag key={tag}>{tag}</Tag>
                                ))}
                            </TagRow>
                        )}
                        <CardAction>View details</CardAction>
                    </CardBody>
                </Card>
            }
        >
            {(close) => (
                <div>
                    <ModalHeader>
                        <ModalTitle>{project.title}</ModalTitle>
                        <CloseButton type="button" onClick={close} aria-label="Close">
                            &times;
                        </CloseButton>
                    </ModalHeader>
                    <ModalBody>{project.description}</ModalBody>
                    {project.tags?.length > 0 && (
                        <ModalTags>
                            {project.tags.map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                        </ModalTags>
                    )}
                    <TagRow>
                        {project.github && (
                            <ModalFooter>
                                <ModalLink
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <Icon src={github} alt="" aria-hidden="true" />
                                </ModalLink>
                            </ModalFooter>
                        )}
                        {project.link && (
                            <ModalFooter>
                                <ModalLink
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Visit project
                                </ModalLink>
                            </ModalFooter>
                        )}
                    </TagRow>
                </div>
            )}
        </Modal>
    );
}

export function Projects() {
    return (
        <Section>
            <SectionTitle>Here are some of my projects!</SectionTitle>
            <CarouselFrame>
                <Carousel
                    responsive={responsive}
                    itemClass="carousel-item"
                    showDots
                    keyBoardControl
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </Carousel>
            </CarouselFrame>
        </Section>
    );
}

export default Projects;
