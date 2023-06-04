import styled from 'styled-components'


export const Wrapper = styled.section`
  display: flex;
  padding: 3.4rem;
  margin-top: 10rem;
  width: 100%;
  min-height: 37rem;
  background-color: black;
  @media (max-width: 1040px) {
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`;

export const GridItem = styled.div`
  padding-left: 5rem;
  width: 50%;
  @media (max-width: 1040px) {
    width: 95%;
    padding: 0;
  }
`;

export const GridBG = styled.div`
  width: 50%;
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 1040px) {
    display: none;
  }
`;

export const Table = styled.table`
  height: 25rem;
  width: 40rem;
  background-color: transparent;
  border-collapse: collapse;
  text-align: center;
  tbody {
      tr {
        td {
          border-top: 1px solid white;
        }
      }
    }
    th {
        text-align: center;
        padding-bottom: 1.5rem;
        font-size: 1.8rem;
      
    }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 9rem;
  @media (max-width: 1040px) {
    padding: 0;
  }
`;

export const Row = styled.div`
  background-color: transparent;
  
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  @media (max-width: 1040px) {
    gap: 12rem;
    padding-top: 3rem;
  }
`;

export const Title = styled.h1`
  margin-top:2rem;
  margin-bottom:2rem;
  font-size: var(--fs-large);
  color: white;
  span{
    font-size: var(--fs-large);
    color:red;
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
    border-radius: 2rem;
    &:hover {
    cursor: pointer;
    color: #ffdbe1;
    background-color: red;
  }
`

export const IMCDiv = styled.div`
  display:flex;
  margin-top:2rem;
  input {
    all:unset;
    width:80%;
    color:white;
    border: solid 2px gray;
    background-color:transparent;
    padding: 1.2rem;
    margin-bottom:1rem;
  }
  div{
    display:flex;
    flex-direction:column;
    width:100%;
  }
`

export const Text = styled.h2`
margin-bottom:3rem;
span {
  color: red;
  
}
`