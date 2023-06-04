import * as S from './styles'
import Link from 'next/link'


const ButtonAnimated = ({ text, link }: { text: string, link: string }) => {
  return (
    <S.Wrapper>
    <S.Rectangle/>
    <Link href={link}>{text}</Link>
    </S.Wrapper>
  )
}

export default ButtonAnimated