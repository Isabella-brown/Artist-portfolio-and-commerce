import React from 'react'
import { BlurText, BlurImage, RowHeader, Container, Hero, Row, Image, Middle, Text } from "./gallery.styles"
import images from "./gallery__images"




const Gallery = () => {
    function changeStyles() {
        console.log("styles")
    }

    return (
        <Hero>
            <RowHeader>Digital art - studies</RowHeader>
            <Row>
                <Container>
                    <Image src="https://cdna.artstation.com/p/assets/images/images/057/161/292/large/isabella-brown-unnamed.jpg?1670964031" onMouseEnter={changeStyles}/>
                    <Middle>
                        <Text>Female portrait study, Procreate</Text>
                    </Middle>
                </Container>

                <Container>
                    <Image src="https://cdna.artstation.com/p/assets/images/images/057/161/388/large/isabella-brown-ren-faire.jpg?1670964243" />
                    <Middle>
                        <Text>Sample text</Text>
                    </Middle>
                </Container>

                <Container>
                    <Image src="https://cdnb.artstation.com/p/assets/images/images/057/352/511/large/isabella-brown-facethumbstudies.jpg?1671384000" />
                    <Middle>
                        <Text>Sample text</Text>
                    </Middle>
                </Container>

                <Container>
                    <Image src="https://cdna.artstation.com/p/assets/images/images/057/161/490/large/isabella-brown-untitled-6.jpg?1670964449" />
                    <Middle>
                        <Text>Sample text</Text>
                    </Middle>
                </Container>

                <Container>
                    <Image src="https://cdnb.artstation.com/p/assets/images/images/057/352/631/large/isabella-brown-ao-study.jpg?1671384314" />
                    <Middle>
                        <Text>Sample text</Text>
                    </Middle>
                </Container>

            </Row>
            <Row>
                <Container>
                    <BlurImage src="https://cdna.artstation.com/p/assets/images/images/057/352/772/large/isabella-brown-16822-figure-study-colour.jpg?1671384657" />
                    <Middle>
                        <Text>Sample text</Text>
                    </Middle>
                </Container>


            </Row>
            <RowHeader>Character concept art</RowHeader>
            <Row></Row>
            <RowHeader>Traditional oil portraits</RowHeader>
        </Hero >



    )
}

export default Gallery
