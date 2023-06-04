import styled, { css } from 'styled-components'
import Card5 from '../../../public/img/banner/banner01.png'
import Banner1 from '../../../public/img/Schedules/pequenito.jpg'


export const Wrapper = styled.div`
  min-height: 65rem;
  display: grid;
  gap: 2rem;
  width: 100%;
`

export const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  list-style: none;
  background: #f2f2f2;
  min-height: 10rem;
  width: 80%;
  margin: auto;
  li{
    width: 20%;
    color: black;
    display: grid;
    align-items: center;
    justify-content: center;
    p{
      font-size: var(--fs-small);
      color: #A0A0A0;
    }
    h2{
      font-size: var(--fs-medium);
    }
  }
  @media (max-width: 850px) {
    height: 30rem;
    width: 90%;
    display: grid;
    justify-content: center;
    align-items: center;
    li{
      width: 30rem;
    }
   
  }
`

export const WrapOptions = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:85%;
  margin: auto;
  height: 10rem;
  @media (max-width: 850px) {
    width: 100%;
    justify-content:center;
  }
`
export const OptionsContent = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:80%;`

export const CheckboxContainer = styled.div`
display: flex;
align-items: center;
justify-content: start;
gap: 2rem;
width: 100%;
p{
  color: black;
  font-size: var(--fs-small);
  font-weight: var(--fw-large);
}

`

export const WrapButtons = styled.div`
display: flex;
  button{
      width: 3rem;
      height: 2.5rem;
      margin-left:1rem;
      border-radius:1rem;
    }
`

export const DayList = styled.div`
  height: 10rem;
  width: 65%;
  margin: auto;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 4rem;
  button {
    all: unset;
    display:flex;
    align-items:center;
    justify-content:center;
    color: black;
    font-weight: 700;
    width: 9rem;
    font-size: var(--fs-small);
    border: solid 1px #eaeaea;
    padding: 1.2rem;
    border-radius: 2rem;
  }
  button:hover{
    cursor: pointer;
    color: #fff;
    background-color: red;
    transition: 0.3s;
  }
  @media (max-width: 500px) {
    width: 90%;
    margin-bottom: 4rem;
  }
  
`

export const Button = styled.button`
    all: unset;
    display:flex;
    align-items:center;
    justify-content:center;
    color: rgba(222, 222, 222, 1);
    font-weight: bold;
    height: 4rem;
    width: 12rem;
    font-size: var(--fs-small);
    background: #2c2c31;
    /* margin-left: 13rem; */
    border-radius: 2rem;
    &:hover {
    cursor: pointer;
    color: #ffdbe1;
    background-color: red;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 30rem;
  background-image: url(${Card5.src});
    background-position: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: grayscale(100%) contrast(200%);
    display: flex;
    justify-content: center;
    align-items: end;
    h1 {
      font-size: 4rem;
      color: red;
      padding-bottom: 3rem;
    }

`

export const GridItem = styled.div`
   display: flex;
  justify-content: flex-end;
  align-items: end;
  background-color: #000;
  padding: 10px;
  font-size: 1.7rem;
  h1{
    font-size: var(--fw-medium);
  }
`;

export const GridBG = styled.div`
    background-image: url(${Card5.src});
    background-position: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: grayscale(100%) contrast(400%);
`;

export const Banner = styled.div`
  background-image: url(${Banner1.src});
  background-position: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 30rem;
  width: 100%;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  h1{
    font-size: var(--fs-hero);
    color: var(--red);
  }
`