import styled from 'styled-components'
import motion from 'framer-motion'
import brush from '../../../public/img/brushs/brushwhite.png'

interface ImageProps {
  src: string
}

export const Slide = styled.div<ImageProps>`
  width: 100%;
  height: 115vh;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: 45% top;
  background-repeat: no-repeat;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

export const Content = styled.div`
    position:absolute;
    right:25rem;
    gap: 1rem;
    display:flex;
    flex-direction:column;
    justify-content: center;
    span{
      font-size: var(--fs-medium);
      color: var(--red);
    }
    h1{
      font-size: var(--fs-hero);
    }
    h2{
      font-size: var(--fs-hero);
      font-weight: var(--fw-small);
      margin-bottom: 3rem;
    }
  @media (max-width: 900px ) {
    position:static;
  }
  @media (max-width: 500px ) {
    span{
      font-size: var(--fs-small);
    }
    h1{
      font-size: var(--fs-big);
    }
    h2{
      font-size: var(--fs-big);
      font-weight: var(--fw-small);
      margin-bottom: 3rem;
    }
  }
`


