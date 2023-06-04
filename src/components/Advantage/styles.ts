import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import advg from '../../../public/img/advantage/backgroundADV.jpg'
import mold from '../../../public/img/advantage/moldure.png'
import brush from '../../../public/img/brushs/clipping.png'
import test from '../../../public/img/Schedules/pequenito.jpg'

interface ImageProps {
  src: string
}

export const Wapper = styled(motion.div)`
  transition: 0.7s;
  background-image: url(${advg.src});
  background-position: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 5rem;
  width:100%;
  min-height:95rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  h2{
    font-size: var(--fs-medium);
    color: black;
  }
`

export const info = styled.div`
  width: 120rem;
  display:flex;
  margin-top: 40rem;
  @media (max-width: 1240px) {
    margin-top: 10rem;
    width: 90%;
  }
  
`
export const WhoWeAre = styled.div`
  color:black;
  width:50%;

  h1{
      color: var(--red);
      font-size:var(--fs-large);
      font-weight:var(--fw-large);
  }
  h2{
      font-size:var(--fs-semi);
      font-weight:var(--fw-medium);
  }
  p{
    font-size:var(--fs-small);
      font-weight:var(--fw-medium);
  }

  ul{
    margin: 3rem 0;
    list-style:none;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 5rem 0rem 5rem 0rem;
    @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
  }
  li{
    height: 21rem;
    display:flex;
    flex-direction:column;
    flex-wrap: wrap;
    align-items:center;
    justify-content:center;
    text-align: center;
    padding: 0 1rem 0 1rem;
    padding-bottom: 6rem;
    border-right: solid 1px grey;

    width:100%;
    
      h3{
        margin-top: 1rem;
        font-size: var(--fs-small);
      }
  }
  li:last-child {
    border-right: none;
  }


  @media (max-width:1240px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    div{
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
    }
  }
  @media (max-width: 800px) {
    li{
    border-right: none;
    border-bottom: solid 1px grey;
  }
    li:last-child {
    border-bottom: none;
  }
  }
`



export const Container = styled.div`
  position: absolute;
  width: 123rem;
  z-index: 1;
  top: 100vh;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 4rem;

  @media (max-width: 1240px) {
    position: relative;
    top: 0;
    flex-direction:column;
    max-width: 90vw;
    
  }
  
`


export const imageMotion = styled(motion(Image)) <ImageProps>`
${({ src }) =>
    css`
      src:${src};
    `}
`

export const advantage = styled(motion.div)`
  background: white;
  height: 32rem;
  width: 38rem;
  border-radius: 5rem 0rem 5rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding: 1rem;
  font-size: 0.5rem;
  box-shadow: 0px 0px 20px 10px rgba(150, 150, 150, 0.5);
  span{
    font-weight: var(--fw-semi);
  }
  :hover {
    background: black;
    transition: 0.4s;
    cursor: pointer;
    span{
      cursor: pointer;
      color: white;
    }
    h2{
      color: white;
    }
  }

  h2{
    margin: 2rem;
    font-weight:var(--fw-large);
    font-size: var(--fs-big);
  }
 
  @media (max-width: 1240px) {
    margin: 2rem 0;
  }
  @media (max-width: 392px) {
    width: 90%;
  }
`
 
export const Moldura = styled.div`
  position: relative;
  width: 48%;
  height: 60rem;
  margin-left: 5rem;
  background-size: cover;
  background-position: 45% top;
  background-repeat: no-repeat;
  ${css`
  -webkit-mask: url(${brush.src});
  -webkit-mask-size: 100%;
`}
  @media (max-width: 1240px) {
    display: none;
  }
  
  
`

export const Video = styled.video`
  width: 75rem;
  height: 50rem;

`