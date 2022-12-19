import styled from "styled-components"



const Container = styled.div`
display:flex;
justify-content:center;
width: 85%;
border-radius: 6px;
padding: 20px 60px 30px 40px;

`

const Content = styled.div`
justify-content: space-between;
flex-direction:column;
`
const Forms = styled.div`
width: 75%;
margin-top:50px;

`
const InputBox = styled.div`
height: 50px;
width: 100%;
margin: 12px 0;
margin-bottom:30px;
`
const Input = styled.input`
height: 100%;
width: 100%;
border: none;
outline: none;
font-size: 16px;
background: #F0F1F8;
border-radius: 6px;
padding: 0 15px;
resize: none;

`
const Header = styled.h3`
font-size: 23px;
font-weight: 600;
color: #3e2093;
`
const SendButton = styled.button`
margin-top:60px;
`

export { SendButton, Header, Container, Content, Forms, InputBox, Input }