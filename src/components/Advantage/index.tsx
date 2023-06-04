import * as S from './styles'
import Image from 'next/image';

import imgPeople from '../../../public/img/advantage/people.svg'
import imgFeelings from '../../../public/img/advantage/feelings.svg'
import imgDocument from '../../../public/img/advantage/document.svg'

import machine from '../../../public/img/advantage/Icones-03.png'
import help from '../../../public/img/advantage/Icones_Mesa_de_trabajo_1.png'
import equipament from '../../../public/img/advantage/Icones-02.png'

import TextAnimation from '../textAnimation/AnimatedText'
import ButtonAnimated from '../ButtonAnimated'





const Cards = [
  {
    id: 'card01',
    image: imgPeople.src,
    alt: 'Imagen que representa un grupo de 3 personas',
    title: 'Progresión',
    text: 'Profesionales dispuestos a ayudarte.',
    delay: 0.4
  },
  {
    id: 'card02',
    image: imgDocument.src,
    alt: 'Logo de  Equilibrio Fitness (es una imagen de un corazon con el nombre equilibrio fitness en el centro)',
    title: 'Nutrición',
    text: 'Un plan nutricional personalizado para tu evolucion fisica y mental.',
    delay: 0.8
  },
  {
    id: 'card03',
    image: imgFeelings.src,
    alt: 'Logo de Equilibrio Fitness (es una imagen de un corazon con el nombre equilibrio fitness en el centro)',
    title: 'Gimnasio',
    text: 'Tenemos un ambiente amigable y acogedor.',
    delay: 1
  }
];

const Advantage = () => {
  return (
    <S.Wapper>
      <S.Container>
        {Cards.map((card) => (
          <S.advantage
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: Number(`${card.delay}`),
              duration: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
            key={card.id}>
            <S.imageMotion
              src={card.image}
              width={100}
              height={100}
              alt={card.alt}
              animate={{
                y: [-10, 1, -10],
                transition: {
                  delay: 0.5,
                  duration: 3,
                  yoyo: Infinity,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}

            />
            <h2>{card.title}</h2>
            <TextAnimation text={card.text} />
          </S.advantage>
        ))}
      </S.Container>
      <S.info>
        <S.WhoWeAre id='weAre'>
          <div>
            <h1>
            ¿Quiénes somos?
            </h1>
            <h2>
              Tu salud y cuerpo a otro nivel!
            </h2>
            <p>
            Con nuestros profesionales te aseguramos una experiencia increíble para cambiar tu mente, cuerpo y salud.
            </p>
          </div>
          <ul>
            <li>
              <Image
                src={help}
                width={65}
                height={65}
                alt="Picture of the author"
              />
              <h3>MEJORES PROFESSIONALES DEL MERCADO</h3>
            </li>
            <li>
              <Image
                src={equipament}
                width={65}
                height={65}
                alt="Picture of the author"
              />
              <h3>EQUIPOS MODERNOS</h3>
            </li>
            <li>
              <Image
                src={machine}
                width={60}
                height={55}
                alt="Picture of the author"
              />
              <h3>GIMNASIO CON MÁQUINAS NUEVAS</h3>
            </li>
          </ul>
          <ButtonAnimated link='/' text='NUESTRAS CLASES' />
        </S.WhoWeAre>
        <S.Moldura>
          <S.Video autoPlay loop muted playsInline>
            <source src='/videoplayback.mp4'/>
          </S.Video>
        </S.Moldura>
      </S.info>
    </S.Wapper >
  )
}

export default Advantage
