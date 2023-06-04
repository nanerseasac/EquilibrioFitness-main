import * as S from "./styles";
import Image from "next/image";
import Logo from "/public/img/icon-512.png";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = visible ? "hidden" : "auto";
  }, [visible]);

  const closeMenu = () => {
    setVisible(false);
  };

  const scrollToSection = (section: string) => {
    closeMenu();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <S.Wrapper>
        <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
          <Image
            src={Logo}
            alt="Logo de Equilibrio Fitness (es una imagen de un corazon con el nombre equilibrio fitness en el centro)"
            width={120}
            height={120}
          />
        </Link>
        <S.Desktop>
          <ul>
            <li>
              <Link to="weAre" spy={true} smooth={true} offset={-200} duration={500} onClick={closeMenu}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="Category" spy={true} smooth={true} offset={20} duration={500} onClick={closeMenu}>
                Modalides
              </Link>
            </li>
            <li>
              <Link to="Times" spy={true} smooth={true} offset={30} duration={500} onClick={closeMenu}>
                Horarios
              </Link>
            </li>
            <li>
              <Link to="Price" spy={true} smooth={true} offset={30} duration={500} onClick={closeMenu}>
                Precio
              </Link>
            </li>
            <li>
              <Link to="Price" spy={true} smooth={true} offset={30} duration={500} onClick={closeMenu}>
                Clases
              </Link>
            </li>
            <li>
              <Link to="Price" spy={true} smooth={true} offset={30} duration={500} onClick={closeMenu}>
                Contactanos
              </Link>
            </li>
            <li>
              <Link to="Price" spy={true} smooth={true} offset={30} duration={500} onClick={closeMenu}>
                Equipo
              </Link>
            </li>
            <li>
              <Link to="Price" spy={true} smooth={true} offset={30} duration={500} onClick={closeMenu}>
                Personal Trainer
              </Link>
            </li>
          </ul>
        </S.Desktop>
        <S.User>
          <AiOutlineMenu className="mobileMenu" size={35} onClick={() => setVisible(true)} />
          <div>
            <AiOutlineUser size={35} />
            <S.UserBtn>Únete a Nosotros!</S.UserBtn>
          </div>
        </S.User>
      </S.Wrapper>
      <AnimatePresence>
        {visible && (
          <S.Mobile initial={{ x: "-100%" }}
            animate={{
              x: visible ? 0 : "-100%",
              transition: { type: "spring", stiffness: 100, damping: 20 }
            }}
            exit={{
              x: "-100%",
              transition: { type: "spring", stiffness: 100, damping: 20 }
            }}>
            <IoClose size={45} onClick={closeMenu} />
            <ul>
              <li>
                <Link to="Price" spy={true} smooth={true} offset={-10} duration={500} onClick={closeMenu}>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="Category" spy={true} smooth={true} offset={10} duration={500} onClick={closeMenu}>
                  Modalides
                </Link>
              </li>
              <li>
                <Link to="Times" spy={true} smooth={true} offset={20} duration={500} onClick={closeMenu}>
                  Horarios
                </Link>
              </li>
              <li>
                <Link to="Price" spy={true} smooth={true} offset={-10} duration={500} onClick={closeMenu}>
                  Precio
                </Link>
              </li>
              <li>
                <Link to="Price" spy={true} smooth={true} offset={-10} duration={500} onClick={closeMenu}>
                  Clases
                </Link>
              </li>
              <li>
                <Link to="Price" spy={true} smooth={true} offset={-10} duration={500} onClick={closeMenu}>
                  Contactanos
                </Link>
              </li>
              <li>
                <Link to="Price" spy={true} smooth={true} offset={-10} duration={500} onClick={closeMenu}>
                  Equipo
                </Link>
              </li>
              <li>
                <Link to="Price" spy={true} smooth={true} offset={-10} duration={500} onClick={closeMenu}>
                  Personal Trainer
                </Link>
              </li>
              <li>
                <a href="https://easy.trainingym.com/equilibriofitness/login" onClick={closeMenu}>
                  Login
                </a>
              </li>
              <li>
                <a href="https://easy.trainingym.com/equilibriofitness/login">Uniete a Nosotros!</a>
              </li>
            </ul>
          </S.Mobile>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
