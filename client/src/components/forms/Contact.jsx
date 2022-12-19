import React from 'react'
import { SendButton, Header, Container, Content, Forms, InputBox, Input } from "./form.styles"

const Contact = () => {
    return (
        <Container>
            <Content>
                <Header> Send me a message</Header>
                <p>Fill in your name, email, and explain the reason for your enquiry in the message field.</p>
                <Forms>
                    <InputBox>
                        <Input type="text" placeholder="Enter your name" />
                    </InputBox>
                    <InputBox>
                        <Input type="text" placeholder="Enter your email" />
                    </InputBox>
                    <InputBox>
                        <Input type="text" placeholder="Enter your message" style={{ "height": "110px" }} />
                    </InputBox>
                    <SendButton>Send</SendButton>
                </Forms>
            </Content>
        </Container>
    )
}

export default Contact