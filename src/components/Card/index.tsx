import * as S from './styles'

interface CardProps {
  ancho: string
  largo: string
}

const Card = ({ ancho, largo }: CardProps) => (
  <S.Wrapper ancho={ancho} largo={largo}>
    <h2>Card</h2>
  </S.Wrapper>
)

export default Card
