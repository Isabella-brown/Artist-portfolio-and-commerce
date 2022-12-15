import * as React from "react";
import { useState } from "react";
//import styled from 'styled-components'
import { image } from "./Slideshow--images";
import { Container, Arrow, Wrapper, Slider, ImageContainer, Image } from "./Slideshow.styles"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'



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