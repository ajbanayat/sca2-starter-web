/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Text = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-size: 1em;

  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.mainBackground};
`

export const Title = styled(Text)`
  font-size: 3em;
  height: 20vh;
  align-content: center;
  align-items: center;
`

export const Container = styled(Flex)`
  display: flex;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

export const TopContainer = styled(Container) `
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  overflow-y: auto;
  padding: 10px;
  width: 45vw;
  height: 80vh;
`

export const MainContainer = styled(Container) `
  align-self:2;
  flex-direction:row;
  align-content:flex-start;
  align-items:flex-start;
`

export const Image = styled.img`
  height: 225px;
  width: 150px;
`

export const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.mainBackground};
`