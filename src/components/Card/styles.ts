import styled from 'styled-components'

interface CardProps {
  ancho: string
  largo: string
}

export const Wrapper = styled.div<CardProps>`
  background-color: gray;
  width: ${(props) => props.ancho};
  height: ${(props) => props.largo};
  border-radius: 20px;
`
