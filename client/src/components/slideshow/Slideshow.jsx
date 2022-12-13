import * as React from "react";
import { useState } from "react";
import styled from 'styled-components'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { image } from "./Slideshow--images";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left-side" && "10px"};
  right: ${(props) => props.direction === "right-side" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);

`
const Slider = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:${props => props.bg}
`

const ImageContainer = styled.div`
height:100vh;
flex:1;
width:100vw;
display:flex;
align-items:center;
justify-content: center;
border:1px;
border-color:black;

`

const Image = styled.img`
height:70%;

`



const Slideshow = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if (direction === "left-side") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left-side" onClick={() => handleClick("left-side")}>
                <AiOutlineArrowLeft />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {image.map((item) => (
                    <Slider bg={item.bg} key={item.id}>
                        <ImageContainer>
                            <Image src={item.img} />
                        </ImageContainer>
                    </Slider>
                ))}
            </Wrapper>
            <Arrow direction="right-side" onClick={() => handleClick("right-side")}>
                <AiOutlineArrowRight />
            </Arrow >
        </Container >


    )
}

export default Slideshow