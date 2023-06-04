import * as S from './styles'
import { useInView } from 'react-intersection-observer'

const TitleAnimation = ({ text, background }: { text: string, background?: boolean }) => {
  const phrases = text.split('.'); // Divide o texto em frases com base no ponto final

  const [ref, inView] = useInView({
    threshold: background ? 0.5 : undefined,
    triggerOnce: !background
  });

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.24 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <S.WrapperTitle
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {phrases.map((phrase, phraseIndex) => (
        <S.Title key={phraseIndex} variants={child}>
          {phrase}
        </S.Title>
      ))}
    </S.WrapperTitle>
  );
};

export default TitleAnimation;
