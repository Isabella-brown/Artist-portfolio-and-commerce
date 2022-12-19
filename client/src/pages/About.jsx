import React from 'react'
import { About__me, Profile__image, Flex__container, About__header } from "./page.styles"

const About = () => {
    return (
        <Flex__container>
            <About__header>About me</About__header>
            <Profile__image src="https://media.licdn.com/dms/image/C4E03AQF-mmT0v6Zyng/profile-displayphoto-shrink_800_800/0/1657040165546?e=1677110400&v=beta&t=HVKHIMpsBEckqNfMtkGYF8bpi7GOcoXGaYN5c0w043U" />
        </Flex__container>
    )
}

export default About