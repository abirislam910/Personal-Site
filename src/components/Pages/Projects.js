import React, {useState} from 'react';
import styled from "styled-components";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const PageBox = styled.div`
    display: flex;
    flex-direction: column;
    place-content: space-evenly;
    justify-content: center;
    padding: 50px;
    margin-top: 100px;
    margin-bottom: 200px;
`;

const Box = styled.div`
    cursor: pointer;
    width: 28vw;
    height: 28vw;   
    background-color: #f0f0f0; 
    border: 5px solid #ccc; 
    border-radius: 15px;   
    margin: 10px;
`;

const StyledPopup = styled(Popup)`
  &-content {
    width: 75vw;
    height: 50vw;   
    background-color: #f0f0f0; 
    border: 5px solid #ccc; 
    border-radius: 15px;   
    margin: 10px;
  }
`;

const Title = styled.h1`
    align-self: center;
    font-size: 4vw;
`;

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export function Projects() {

  const [boxColor, setBoxColor] = useState('red');

  const handleHover = () => {
    setBoxColor('blue');
  }

  return (
    <PageBox>
        <Title>Here are some projects I've worked on!</Title>
        <Carousel responsive={responsive}>
            <StyledPopup  
              trigger=
                {<Box onMouseEnter={handleHover} style={{backgroundColor: boxColor}}></Box>} 
              position="right center" 
              modal
              closeOnDocumentClick
              >
                {close => (
                    <div>
                      Content here | 
                      <a className="close" onClick={close}>
                        &times;
                      </a>
                    </div>
                  )}
            </StyledPopup>
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </Carousel>
    </PageBox>
  );
}