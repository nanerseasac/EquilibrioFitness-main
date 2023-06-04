import * as S from './styles'
import Image from 'next/image';
import Card1 from '../../../public/img/cards/card-01.jpg';
import Card2 from '../../../public/img/cards/cross-training.jpg';
import Card3 from '../../../public/img/cards/dance-mix.jpg';
import Card4 from '../../../public/img/cards/functional-training.jpg';
import Card5 from '../../../public/img/cards/musculacion-cardio.jpg';
import advg from '../../../public/img/advantage/backgroundADV.jpg'

function Category() {
  return (
    <S.Wrapper id='Category'>
      <h1>Nuevo Fitness</h1>
      <h2>Personalizado Murcia</h2>
      <S.Grid>
      <S.Image src={Card2.src}>
        <h1>Funcional</h1>
      </S.Image>
      <S.Image src={Card1.src}>
        <h1>Musculacion</h1>
      </S.Image>
      </S.Grid>
    </S.Wrapper>
  );
}
export default Category;
