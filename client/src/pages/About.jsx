import React from 'react'
import { About__me__header, About__container, About__card, About__me, Profile__image, Flex__container, About__header } from "./page.styles"
import { AiOutlineInstagram } from 'react-icons/ai'

const About = () => {
    return (
        <Flex__container>
            <About__card>
                <Profile__image src="https://media.licdn.com/dms/image/C4E03AQF-mmT0v6Zyng/profile-displayphoto-shrink_800_800/0/1657040165546?e=1677110400&v=beta&t=HVKHIMpsBEckqNfMtkGYF8bpi7GOcoXGaYN5c0w043U" />
                <h3>Isabella Brown</h3>
                <p>2D Artist | 3D Artist | Software Engineer</p>
                <a href="https://instagram.com"><AiOutlineInstagram /></a>
                <a href="https://www.artstation.com/isabellabrown3"><img src="https://img.icons8.com/windows/25/null/artstation.png" /></a>
            </About__card>
            <About__container>
                <About__header>About me</About__header>
                <About__me>My name is Isabella Brown and I am a self-taught artist specialising in 2D and 3D digital character art, and portraits in digital and traditional mediums.</About__me>
                <About__me>My focus is on portraits, humanoid characters, and human anatomy.</About__me>
                <About__me>If you have any questions regarding commissions or freelance services, please contact me at isabellabrownenquiries@gmail.com.</About__me>
                <About__me__header>Awards and exhibitions:</About__me__header>
                <About__me>Young Artist of the Year: 'Portrait of Emma', South West Art Academy, 2022</About__me>
                <About__me>Open Exhibition: 'Self-Portrait of the Artist', South West Art Academy, 2021</About__me>
                <About__me__header>Find me on:</About__me__header>
                <About__me>Instagram: </About__me>
                <About__me>Artstation: https://www.artstation.com/isabellabrown3</About__me>
            </About__container>
        </Flex__container>
    )
}

export default About