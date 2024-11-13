import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";

const Title = styled.h1`
    text-decoration: underline;
    color: ghostwhite;
    align-self: center;
    font-size: 3vw;
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

//#032e73

export function Contact() {
    const form = useRef();

    const [messageVal, setMessageVal] = useState('');
    const [userVal, setUserVal] = useState('');
    const [emailVal, setEmailVal] = useState('');

    const [buttonHover, setButtonHover] = useState(false)


    const handleInputChangeMessage = (event) => {
      setMessageVal(event.target.value);
    }

    const handleInputChangeUser = (event) => {
      setUserVal(event.target.value);
    }

    const handleInputChangeEmail = (event) => {
      setEmailVal(event.target.value);
    }

    const handleMouseEnter = () => {
      if (isButtonActive) {
        setButtonHover(true);
      }
    }

    const handleMouseLeave = () => {
      if (isButtonActive) {
        setButtonHover(false);
      }
    }

    const isButtonActive = (messageVal.trim().length > 0) && (userVal.trim().length > 0) && (emailVal.trim().length > 0);

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wn2a0c7', 'template_nwwolb2', form.current, {
        publicKey: 'InIPj4mbjDRJg_LB7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.location.reload();
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
        <StyledLabel style={{marginTop: "-1vh"}}>Name:</StyledLabel>
        <StyledInput 
          type="text" 
          name="user_name"
          onChange={handleInputChangeUser}
        />
        <StyledLabel>Email:</StyledLabel>
        <StyledInput 
          type="email" 
          name="user_email"
          onChange={handleInputChangeEmail}
        />
        <StyledLabel>Message:</StyledLabel>
        <StyledText 
          name="message" 
          placeholder='Enter Your Message!' 
          onChange={handleInputChangeMessage}/>
        <StyledButton 
          type="submit" 
          value="Submit" 
          style={{
            backgroundColor: buttonHover ? '#0546ad' : isButtonActive ? '#032e73' : 'gray',
            cursor: isButtonActive ? 'pointer' : 'not-allowed',
          }}
          disabled={!isButtonActive}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </StyledForm>
    </ContactPageBox>
  );
}