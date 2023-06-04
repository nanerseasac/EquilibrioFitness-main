import { useInView } from "react-intersection-observer";
import * as S from './styles'

const TextAnimation = ({ text }: { text: string }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <S.WrapperText ref={ref} variants={container} initial="hidden" animate={inView ? "visible" : "hidden"}>
      {words.map((word, index) => (
        <S.Text key={index} variants={child}>
          {word + "\u00A0"}
        </S.Text>
      ))}
    </S.WrapperText>
  );
};

export default TextAnimation;
