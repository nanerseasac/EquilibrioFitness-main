import styled, {css} from 'styled-components'

interface WrapperProps {
  inSpecificComponent?: boolean;
}


export const Wrapper = styled.div`
  position:relative;
  width:17rem;
  height:5rem;
  color:black;
  font-weight: var(--fw-large);

  a{
      position:absolute;
      left:-1rem;
      bottom:-1rem;
      display:flex;
      align-items:center;
      justify-content:center;
      text-decoration: none;
      color: white;
      background-color: #2c2c31;
      width:100%;
      height:100%;
    }

  :hover{
    div{
      color:black;
      transform: translate(-6.5%, 17%);
    }
  }
`

export const Rectangle = styled.div`
  all:unset;
  position:absolute;
  transition: transform 0.5s ease;
  background-color:transparent;
  border:solid 1px grey;
  color:black;
  width:100%;
  height:100%;
`;

export const SpecialButton = styled(Wrapper)<WrapperProps>`
  /* Estilos específicos para quando estiver usando o botão em um componente específico */
  ${props =>
    props.inSpecificComponent &&
    css`
      background-color: green;
      color: black;
    `}
`;