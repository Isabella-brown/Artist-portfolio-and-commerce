import styled from "styled-components"
import React from "react"

const Home__header = styled.h1`
margin-left: 20px;
margin-top: 20px;
margin-bottom: -60px;
`
const Profile__image = styled.img`
width:200px;
border-radius:50%;
margin-bottom:5px;
`
const Flex__container = styled.div`
display:flex;
flex-align:row;
margin-top:20px;
`
const About__header = styled.h1`

`
const About__me = styled.p`
display:flex;
`
const About__card = styled.div`
height: 400px;
width:40%;
text-align:center;
justift-content:center;
margin-top:100px
`

const About__container = styled.div`
margin-left:40px;
`

export { About__container, About__card, About__me, Home__header, Profile__image, About__header, Flex__container }