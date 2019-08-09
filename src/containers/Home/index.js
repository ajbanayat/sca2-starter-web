/* eslint-disable linebreak-style */
import React, { Component } from 'react'
import {
  MainContainer,
  Container,
  Title,
  Image,
  Button,
  TopContainer
} from './styles'
import Selection from '../../components/Selection'

// const spiritedAway = [
//   'Spirited Away',
//   'https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png',
//   'Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?'
// ]
const spiritedAway = {
  id: 'dc2e6bd1-8156-4886-adff-b39e6043af0c',
  title: 'Spirited Away',
  description:
    'Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?',
  director: 'Hayao Miyazaki',
  producer: 'Toshio Suzuki',
  release_date: '2001',
  rt_score: '97',
  people: ['https://ghibliapi.herokuapp.com/people/'],
  species: [
    'https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2'
  ],
  locations: ['https://ghibliapi.herokuapp.com/locations/'],
  vehicles: ['https://ghibliapi.herokuapp.com/vehicles/'],
  url:
    'https://ghibliapi.herokuapp.com/films/dc2e6bd1-8156-4886-adff-b39e6043af0c'
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: spiritedAway
    }

    this.switchMovie = this.switchMovie.bind(this)
  }

  componentDidMount(id) {
    fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ movie: data })
      })
      .catch(console.log)
  }

  switchMovie = (chosenMovie, e) => {
    // this.setState({ movie: chosenMovie })
    this.componentDidMount(chosenMovie)
  }

  render() {
    return (
      <Container>
        <Title>Studio Ghibli</Title>
        <MainContainer>
          <TopContainer>
            <Button
              onClick={e =>
                this.switchMovie('dc2e6bd1-8156-4886-adff-b39e6043af0c', e)
              }
            >
              <Image src="https://res-4.cloudinary.com/dostuff-media/image/upload//c_fill,g_faces,f_auto,w_800/v1546454768/event-poster-10257696.jpg" />
            </Button>
            <Button
              onClick={e =>
                this.switchMovie('cd3d059c-09f4-4ff3-8d63-bc765a5184fa', e)
              }
            >
              <Image src="https://fesapusewebsite.blob.core.windows.net/fathom/howls3-49077fb5f658a5c95332976cfc61ee48.jpg" />
            </Button>
            <Button
              onClick={e =>
                this.switchMovie('ea660b10-85c4-4ae3-8a5f-41cea3648e3e', e)
              }
            >
              <Image src="https://fesapusewebsite.blob.core.windows.net/fathom/kikidoyouloveme-c537c2fbe895a651b76179c8b7a4f23b.jpg" />
            </Button>
            <Button
              onClick={e =>
                this.switchMovie('2baf70d1-42bb-4437-b551-e5fed5a87abe', e)
              }
            >
              <Image src="https://fesapusewebsite.blob.core.windows.net/fathom/castleinthesky-1000x1480-r3-f6aba65dfc41c4fc47fc9289c1674057.jpg" />
            </Button>
            <Button
              onClick={e =>
                this.switchMovie('12cfb892-aac0-4c5b-94af-521852e46d6a', e)
              }
            >
              <Image src="http://www.gablescinema.com/media/filmassets/Grave_of_the_Fireflies_Poster.jpg.500x715_q85_crop-smart.jpg" />
            </Button>
            <Button
              onClick={e =>
                this.switchMovie('12cfb892-aac0-4c5b-94af-521852e46d6a', e)
              }
            >
              <Image src="" />
            </Button>
            <Button
              onClick={e =>
                this.switchMovie('2baf70d1-42bb-4437-b551-e5fed5a87abe', e)
              }
            >
              <Image src="" />
            </Button>
          </TopContainer>
          <Selection info={this.state.movie} />
        </MainContainer>
      </Container>
    )
  }
}

export default Home
