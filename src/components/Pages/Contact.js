import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";

const Title = styled.h1`
    text-decoration: underline;
    color: ghostwhite;
    align-self: center;
`;

const StyledInput = styled.input`
    margin-left: 10vw;
    margin-right: 60vw;
    max-width: 100vw;
    height: 3vh;
    border-radius: 4px;
    border-width: 3px;
    border-color: #ffff;
    font-size: 18px;
    color: black;
    
`;

const StyledButton = styled.input`
    margin-left: 10vw;
    margin-top: 2vh;
    height: 6vh;
    width: 20vw;
    border-radius: 20px;
    background-color: grey;
    color: ghostwhite;
    font-size: 20px;
    
`;

const StyledText = styled.textarea`
    margin-right: 10vw;
    margin-left: 10vw;
    max-width: 100vw;
    margin-bottom: 1vh;
    height: 40vh;
    border-radius: 4px;
    border-width: 3px;
    border-color: #ffff;
    font-size: 18px;
`;

const StyledLabel = styled.label`
    font-size: 26px;
    color: ghostwhite;
    margin-right: 10vw;
    margin-left: 10vw;
    margin-top: 2vh;
    height: 4vh;
`;

const ContactPageBox = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    color: black;
    padding: 5 px;
`;

export function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wn2a0c7', 'template_nwwolb2', form.current, {
        publicKey: 'InIPj4mbjDRJg_LB7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <ContactPageBox>
      <Title>Contact Me Directly!</Title>
      <StyledForm ref={form} onSubmit={sendEmail}>
        <StyledLabel style={{marginTop: "0vh"}}>Name:</StyledLabel>
        <StyledInput type="text" name="user_name" />
        <StyledLabel>Email:</StyledLabel>
        <StyledInput type="email" name="user_email" />
        <StyledLabel>Message:</StyledLabel>
        <StyledText name="message" />
        <StyledButton type="submit" value="Submit" />
      </StyledForm>
    </ContactPageBox>
  );
}