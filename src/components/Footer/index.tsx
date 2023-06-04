import * as S from './styles'
import { FaCalendarWeek, FaPhone, FaMapMarkedAlt, FaArrowRight } from 'react-icons/fa'

const Footer = () => (
  <S.Wrapper
  >
    <h2>Equilibro Fitness</h2>
    <S.Container>
      <S.Lista>
        <li><FaCalendarWeek size={15} /> Luenes e Viernes de 7:00 a 22:200</li>
        <li><FaCalendarWeek size={15} /> Sabado de 8:00 a 13:00</li>
        <li><FaPhone size={15} /> Telefono +34 613 413 279</li>
        <li><FaMapMarkedAlt size={15} /> Direccion: C/ Estacion, 27 (Molina de Segura)</li>
        <li><FaArrowRight size={15} /> @equilibriofitness.com</li>
        <li><FaArrowRight size={15} /> Aviso Legal</li>
        <li><FaArrowRight size={15} /> Condiciones Genereles</li>
        <li><FaArrowRight size={15} /> Política de Privacidad</li>
        <li><FaArrowRight size={15} /> Política de Cookies</li>
      </S.Lista>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5305553.660152199!2d-5.845958224747449!3d37.51063742214424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd647fce14430b1b%3A0x3dab54319c257111!2sEquil%C3%ADbrio%20Fitness!5e0!3m2!1spt-BR!2sbr!4v1681323634337!5m2!1spt-BR!2sbr"></iframe>
    </S.Container>
  </S.Wrapper>
)

export default Footer
