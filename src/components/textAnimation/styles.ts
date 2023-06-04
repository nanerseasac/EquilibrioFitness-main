import styled from 'styled-components'
import { motion } from 'framer-motion'

export const WrapperTitle = styled(motion.div)`
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
`;
export const Title = styled(motion.h2)`
  font-family:var(--mont);
  display: inline-block;
  font-size: 5rem;
  color: #000;
  @media (max-width: 920px) {
    font-size: 2.5rem;
  }
`

export const WrapperText = styled(motion.div)`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
`


export const Text = styled(motion.span)`
  font-size: 1.5rem;
  color: black;
`

export const Letter = styled(motion.span)`
  display: inline-block;
`;