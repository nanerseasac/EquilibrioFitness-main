import * as S from './styles'
import heroImg from '../../../public/img/hero/Background.jpg'
import TitleAnimation from '../textAnimation/AnimatedTitle'
import ButtonAnimated from '../ButtonAnimated'

function Hero() {
  return (
    <>
      <S.Slide src={heroImg.src}>
        <S.Content>
          <div>
          <span>FIND YOUR ENERGY</span>
          </div>
          <h1>MAKE YOUR BODY</h1>
          <h2>FIT & PERFECT</h2>
          <ButtonAnimated text='Empezar Hoy !' link='https://easy.trainingym.com/equilibriofitness' />
        </S.Content>
      </S.Slide>
    </>
  )
}

export default Hero
