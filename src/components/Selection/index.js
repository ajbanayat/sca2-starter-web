/* eslint-disable linebreak-style */
import React from 'react'
import { Text, Title, TextContainer } from './styles'

// const Selection = ({ title, description, imgSrc }) => (
const Selection = ({ info }) => (
  <TextContainer>
    <Title>{info.title}</Title>
    <Text>{info.description}</Text>
  </TextContainer>
)

// class Selection extends Component {
//   render() {
//     return <Container>Spirited Away</Container>
//   }
// }

export default Selection
