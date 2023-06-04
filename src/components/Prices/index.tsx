import * as S from './styles'
import Image from 'next/image'

import webVerified from '../../../public/img/status/verified.svg'
import webUnVerified from '../../../public/img/status/unVerified.svg'

import mobileVerified01 from '../../../public/img/prices/mobilePrices/verify01.svg'
import mobileVerified02 from '../../../public/img/prices/mobilePrices/verify02.svg'
import mobileUnVerified from '../../../public/img/prices/mobilePrices/cancelled.svg'

import mobileLogo01 from '../../../public/img/prices/mobilePrices/logo01.svg'
import mobileLogo02 from '../../../public/img/prices/mobilePrices/logo02.svg'

import { FaCheck } from 'react-icons/fa'
import TitleAnimation from '../textAnimation/AnimatedTitle'
import { motion } from 'framer-motion'

import ButtonAnimated from '../ButtonAnimated'

import Link from 'next/link'

const cards = [
  {
    id: 'card1',
    title: 'Premium',
    logo: mobileLogo01.src,
    price: '55€',
    color: '#D00000',
    shadow: 'rgba(255, 0, 0, 0.3)',
    verified: { mobileVerified01 },
    top: '0',
    right: '0'
  },
  {
    id: 'card2',
    title: 'Economy',
    logo: mobileLogo02.src,
    price: '45€',
    color: '#7F28ED',
    shadow: 'rgba(255, 0, 157, 0.3)',
    verified: { mobileVerified02 },
    top: '-1',
    right: '0'
  },
];

const Prices = () => (
  <S.Wrapper id='Price'
  >
    <TitleAnimation text='Planes' />
    <S.webPrices
    >
      <table>
        <thead>
          <tr>
            <th></th>
            <th>
              <h3>Economy</h3>
            </th>
            <th>
              <S.Premium>Premium</S.Premium>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tableTitle">Acesso ilimitado</td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
          </tr>
          <tr>
            <td className="tableTitle">Valorazion Inicial</td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
          </tr>
          <tr>
            <td className="tableTitle">Plan Nutricional</td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
          </tr>
          <tr>
            <td className="tableTitle">Programa Personalizado</td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
          </tr>
          <tr>
            <td className="tableTitle">Musculacion / Cardio</td>
            <td>
              <Image
                src={webUnVerified}
                alt="Icono de inactivo ( X )"
                width={22}
                height={22}
              />
            </td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
          </tr>
          <tr>
            <td className="tableTitle">Balance</td>
            <td>
              <Image
                src={webUnVerified}
                alt="Icono de inactivo ( X )"
                width={22}
                height={22}
              />
            </td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
          </tr>
          <tr>
            <td className="tableTitle">Dance Mix</td>
            <td>
              <Image
                src={webUnVerified}
                alt="Icono de inactivo ( X )"
                width={22}
                height={22}
              />
            </td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
          </tr>
          <tr>
            <td className="tableTitle">Funcional / Hit</td>
            <td>
              <Image
                src={webUnVerified}
                alt="Icono de inactivo ( X )"
                width={22}
                height={22}
              />
            </td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <h2>
                45€ <span>/ mes</span>
              </h2>
            </td>
            <td>
              <h2>
                55€<span>/ mes</span>
              </h2>
            </td>
          </tr>
        </tbody>
      </table>
    </S.webPrices>
    <S.mobileWrap
    >
      {cards.map((card) => (
        <S.mobilePrices
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          color={card.color} shadow={card.shadow} key={card.id}>
          <S.mobileTitle>
            <h2>{card.title}</h2>
          </S.mobileTitle>
          <ul>
            <li><FaCheck size={12} /> Acesso ilimitado</li>
            <li><FaCheck size={12} /> Valorazion Inicial</li>
            <li><FaCheck size={12} /> Plan Nutricional</li>
            <li><FaCheck size={12} /> Programa Personalizado</li>
            <li>{card.title === 'Economy' ? <Image src={mobileUnVerified.src} alt='X' width={12} height={12} /> : <FaCheck size={12} />} Musculacion/Cardio</li>
            <li>{card.title === 'Economy' ? <Image src={mobileUnVerified.src} alt='X' width={12} height={12} /> : <FaCheck size={12} />} Balance</li>
            <li>{card.title === 'Economy' ? <Image src={mobileUnVerified.src} alt='X' width={12} height={12} /> : <FaCheck size={12} />} Dance Mix</li>
            <li>{card.title === 'Economy' ? <Image src={mobileUnVerified.src} alt='X' width={12} height={12} /> : <FaCheck size={12} />} Funcional/HIIT</li>
          </ul>
          <S.mobileBuy>
            <span>{card.price}</span>
            <Link href={card.title === "Premium" ? 'https://easy.trainingym.com/equilibriofitness/info/s/0EL/5q37' : 'https://easy.trainingym.com/equilibriofitness/info/s/w04/pnlN'}>Comprar</Link>
          </S.mobileBuy>
        </S.mobilePrices>
      ))}
    </S.mobileWrap>
    <S.HiddenButton><ButtonAnimated text='!Elige tu plan' link='/'></ButtonAnimated></S.HiddenButton>
  </S.Wrapper >
)

export default Prices
