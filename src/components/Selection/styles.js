/* eslint-disable linebreak-style */
import styled from 'styled-components'
import { Flex } from '@rebass/grid'

// eslint-disable-next-line import/prefer-default-export
export const Text = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-size: 1em;

  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.mainBackground};

  padding: 10px;
`

export const Container = styled(Flex)`
  display: inline;
  flex-direction: row;
  justify-content: space-around;
  /* align-content: center; */
  align-items: center;
  padding: 5vh;
  width: 55vw;
`

export const ImageContainer = styled(Container)`
  display: flex;
`

export const TextContainer = styled(Container)`
  text-align: left;
  display: flex;
  flex-direction: column;
`

export const Title = styled(Text)`
  font-size: 2.7em;
  height: 20vh;
  width: 100%;
  align-content: flex-start;
  align-items: flex-start;
`

export const Image = styled.img`
  height: 376px;
  width: 265px;
`