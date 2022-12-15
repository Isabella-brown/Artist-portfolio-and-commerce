import styled from "styled-components"

const Container = styled.div`
    background-color:blue;
`
const Grid = styled.div`
display:grid;
grid-template-columns: repeat(8,1fr)
grid-template-rows:repeat(8,5vw)
background-color:pink
`

export { Container, Grid }