import styled, { css } from 'styled-components'
import advg from '../../../public/img/advantage/backgroundADV.jpg'

interface ImageProps {
  src: string
}

export const Wrapper = styled.div`
  padding-top: 5rem;
  background-image: url(${advg.src});
  background-position: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 70rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 4rem 0;
  h1{
    font-size: var(--fs-big);
    color: black;
  }
  h2{
    font-size: var(--fs-hero);
    color: var(--red);
  }

  @media (max-width: 800px) {
    h1{
      font-size: var(--fs-small);
    }
    h2{
      font-size: var(--fs-big);
    }
  }
`

export const Image = styled.div<ImageProps>`
  position: relative;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: 45% top;
  background-repeat: no-repeat;
  width: 48%;
  height:40rem;
  display:flex;
  flex-direction:column;
  background-color:black;
  filter: grayscale(100%);
  cursor: pointer;
  :hover{
    filter: none;
    transition: 0.4s;
    h1{
      color: var(--red);
    }
  }
  h1{
    position: absolute;
    left: 7%;
    bottom: 20%;
    color: white;
    font-size: var(--fs-big);
  }
  @media (max-width: 800px) {
    width: 95%;
    margin: 2rem;
  }
`

export const Grid = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
align-items: center;
margin: auto;
@media (max-width: 800px) {
    display:flex;
    flex-direction:column;
    width: 90%;
  }
`