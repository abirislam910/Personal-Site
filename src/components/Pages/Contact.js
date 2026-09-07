import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Container, SectionTitle } from "../../styles/primitives.js";
import { theme, mq } from "../../styles/theme.js";

const EMAILJS_SERVICE = "service_wn2a0c7";
const EMAILJS_TEMPLATE = "template_nwwolb2";
const EMAILJS_PUBLIC_KEY = "InIPj4mbjDRJg_LB7";

const EMPTY_FORM = { user_name: "", user_email: "", message: "" };

const Section = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Clears the gradient's fade band so the heading sits on solid blue. */
    padding-top: clamp(150px, 24vh, 240px);
    padding-bottom: clamp(64px, 12vh, 128px);
`;

const Title = styled(SectionTitle)`
    color: ${theme.color.onBrand};
`;

// The form sits on a light card so the inputs stay legible against the
// gradient behind them.
const Card = styled.form`
    width: 100%;
    max-width: 620px;
    margin-top: clamp(28px, 5vh, 48px);
    padding: clamp(24px, 4vw, 40px);
    background: ${theme.color.card};
    border-radius: ${theme.radius.lg};
    box-shadow: ${theme.shadow.lg};
`;

const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    & + & {
        margin-top: 20px;
    }
`;

const Label = styled.label`
    font-size: 0.92rem;
    font-weight: 500;
    color: ${theme.color.ink};
`;

// Inputs and the textarea share one visual definition, so they can never drift
// apart the way two separate rule sets did.
const fieldStyles = `
    width: 100%;
    padding: 12px 14px;
    background: ${theme.color.surface};
    border: 1px solid ${theme.color.line};
    border-radius: ${theme.radius.md};
    font-size: 1rem;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;

    &::placeholder {
        color: ${theme.color.inkSoft};
        opacity: 0.7;
    }

    &:hover {
        border-color: ${theme.color.brandSoft};
    }

    &:focus {
        outline: none;
        background: ${theme.color.card};
        border-color: ${theme.color.brand};
        box-shadow: 0 0 0 3px rgba(140, 12, 244, 0.15);
    }
`;

const Input = styled.input`
    ${fieldStyles}
`;

const TextArea = styled.textarea`
    ${fieldStyles}
    min-height: 160px;
    resize: vertical;
`;

const SubmitButton = styled.button`
    width: 100%;
    margin-top: 28px;
    padding: 14px 24px;
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.color.onBrand};
    background: ${theme.color.brand};
    border: none;
    border-radius: ${theme.radius.pill};
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;

    &:hover:not(:disabled) {
        background: ${theme.color.brandDeep};
        transform: translateY(-1px);
    }

    &:disabled {
        background: ${theme.color.line};
        color: ${theme.color.inkSoft};
        cursor: not-allowed;
    }
`;

const Status = styled.p`
    margin-top: 16px;
    text-align: center;
    font-size: 0.95rem;
    color: ${({ $tone }) =>
        $tone === "error" ? "#B3261E" : theme.color.brand};

    ${mq.sm} {
        font-size: 0.9rem;
    }
`;

export function Contact() {
    const form = useRef();
    const [values, setValues] = useState(EMPTY_FORM);
    // idle | sending | success | error
    const [status, setStatus] = useState("idle");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((current) => ({ ...current, [name]: value }));
        if (status !== "idle") setStatus("idle");
    };

    const isComplete = Object.values(values).every(
        (value) => value.trim().length > 0
    );

    const sendEmail = (event) => {
        event.preventDefault();
        setStatus("sending");

        emailjs
            .sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, form.current, {
                publicKey: EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    setStatus("success");
                    setValues(EMPTY_FORM);
                },
                (error) => {
                    console.error("Contact form failed to send:", error?.text ?? error);
                    setStatus("error");
                }
            );
    };

    return (
        <Section>
            <Title>Contact Me Directly!</Title>
            <Card ref={form} onSubmit={sendEmail}>
                <Field>
                    <Label htmlFor="contact-name">Name</Label>
                    <Input
                        id="contact-name"
                        type="text"
                        name="user_name"
                        autoComplete="name"
                        value={values.user_name}
                        onChange={handleChange}
                        required
                    />
                </Field>
                <Field>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                        id="contact-email"
                        type="email"
                        name="user_email"
                        autoComplete="email"
                        value={values.user_email}
                        onChange={handleChange}
                        required
                    />
                </Field>
                <Field>
                    <Label htmlFor="contact-message">Message</Label>
                    <TextArea
                        id="contact-message"
                        name="message"
                        placeholder="Enter your message!"
                        value={values.message}
                        onChange={handleChange}
                        required
                    />
                </Field>
                <SubmitButton
                    type="submit"
                    disabled={!isComplete || status === "sending"}
                >
                    {status === "sending" ? "Sending…" : "Submit"}
                </SubmitButton>
                {status === "success" && (
                    <Status role="status">
                        Thanks! Your message is on its way — I&apos;ll get back to you soon.
                    </Status>
                )}
                {status === "error" && (
                    <Status role="alert" $tone="error">
                        Something went wrong sending that. Please try again, or email me
                        directly at aislam99@bu.edu.
                    </Status>
                )}
            </Card>
        </Section>
    );
}

export default Contact;
