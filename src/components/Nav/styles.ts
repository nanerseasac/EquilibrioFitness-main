import styled, { css } from 'styled-components';
import Link from 'next/link'
import { motion } from "framer-motion";

export const Wrapper = styled(motion.nav)`
  width: 100%;
  height:10rem;
  background-color:black;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;

  padding: 2rem 3rem;

  position:fixed;
  z-index:2;
`

export const Desktop = styled(motion.ul)`
  list-style-type: none;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  width:100rem;

  ul{
    width:100%;
    padding:1rem;
    list-style:none;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  
  a{
    font-size:var(--fs-small);
    color:inherit;
    text-decoration:inherit;
    font-weight:lighter;
    :hover{
      cursor:pointer;
      color:red;
      transition:all 0.3s ease 0s;
    }
  }
  @media (max-width: 1110px) {
    display:none;
  }
`

export const User = styled(motion.div)`
  display:flex;
  align-items:center;
  justify-content:space-evenly;

  width:30rem;

  .mobileMenu{
    display:none;
  }
  div{
    display:flex;
    align-items:center;
    justify-content:space-between;
    width: 20rem;
  }
  @media (max-width: 1110px) {
    .mobileMenu{
    display:flex;
  }
  }
  @media (max-width: 510px) {
    div{
      display:none;
    }
    justify-content:end;
  }
`
export const UserBtn = styled(motion.button)`
  display:flex;
  align-items:center;
  justify-content:center;
  width: 15rem;
  height:3.5rem;
  background-color:transparent;
  color:white;
  border: 2px solid gray;
  border-radius:0rem;
  font-size:var(--fs-small);
  font-weight:var(--fw-small);
`
export const Mobile = styled(motion.div)`
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:center;

  width:100vw;
  height:100vh;

  background-color: whitesmoke;
  color:black;
  z-index:3;
  
  svg{
    position:fixed;
    top:3rem;
    right:2.5rem;
    :hover{
    color:red;
  }
  }
  ul{
    list-style:none;
    li{
      font-size:var(--fs-semi);
      font-weight:var(--fw-semi);
      :hover{
    color:red;
  }
    }
  }
`
