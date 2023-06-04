import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  margin-top: 10rem;
  padding: 2rem 20rem;
  background-color: #f0eff4;
  h2 {
    color: red;
    font-family: var(--mont);
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 4rem;
    letter-spacing: 0em;
    text-align: center;
    text-align: start;
  }
  @media (max-width: 1063px) {
    padding: 2rem;
    h2 {
      font-size: 3rem;
    }
}
`
export const Container = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 670px) {
  flex-direction:column;
  iframe{
    width:100%;
    height:15%;
  }
}
`

export const Lista = styled.ul`
  list-style-type: none;
  color: black;
  font-size: 1.6rem;
  padding-top: 1rem;
  li {
    svg{
      color: var(--red);
    }
    padding-top: 1.2rem;
  }
  @media (max-width: 670px) {
    margin-bottom: 5rem;
    }
`
