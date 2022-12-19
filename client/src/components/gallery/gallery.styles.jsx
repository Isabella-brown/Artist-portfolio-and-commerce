import styled from "styled-components"

const Hero = styled.div`
margin-top:80px;
`
const Container = styled.div`
width:20%;
position: relative;
transition: transform 500ms;
display: block;
@media only screen and (max-width: 800px) {
    width: 100%;
}
&:hover{
    transform: none;
    z-index: 1;
    &.middle{
        opacity:1;
        background-color:pink
    }
}
`
const Row = styled.div`
display:flex;
flex-wrap:wrap
&:hover{
    transform: scale(1.5);
    z-index: 1;
}
margin-bottom:30px;
`
const Image = styled.img`
width: 90%;
opacity: 1;
height: auto;
display: block;
&:hover{
&.Text{
color:red;
}
}
`
const BlurImage = styled.img`
width: 90%;
opacity: 1;
height: auto;
display: block;
filter:blur(10px)
/*&:hover {
    transition: .5s ease;
    filter:blur(0px);
}*/
`

const BlurText = styled.text`
color: white;
font-size: 16px;
padding: 16px 32px;
@media only screen and (max-width: 1500px){
    font-size: 10px;
    padding: 32px 16px;
}
`

const Middle = styled.div`
transition: .5s ease;
opacity: 0;
position: absolute;
text-align: center;
top: 0;
bottom:0px;
left: 0;
right: 0;
height: 100%;
width: 100%;
&:hover{
    transition: .2s ease;
    opacity:1;
    color:white;
    background-color:#111212;
    height:20%
}
`

const Text = styled.div`
color: white;
font-size: 40px;
padding: 16px 32px;
@media only screen and (max-width: 1500px){
    font-size: 15px;
    padding: 0px 0px 0px 0px;
}
`

const RowHeader = styled.h2`
margin-left:10px;
margin-bottom:10px;
`


export { BlurText, BlurImage, Container, Hero, Row, Image, Middle, Text, RowHeader }