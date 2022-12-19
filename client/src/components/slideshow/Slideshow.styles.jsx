import styled from 'styled-components'


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

export { Container, Arrow, Wrapper, Slider, ImageContainer, Image }