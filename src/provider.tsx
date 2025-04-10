import { MotionProps, Transition } from "framer-motion";
import { createContext, ReactNode, useState } from "react";

export const AnimacoesContext = createContext<AnimacoesContextType | null>(
  null
);

type AnimacoesContextType = {
  sobeDesce: MotionProps;
  sobeDesce2: MotionProps;
  sobeDesce3: MotionProps;
  Digitando: MotionProps;
  Cursor: MotionProps;
  aparecer: MotionProps;
  Girar: (isOpen: boolean) => MotionProps;
  switchTheme: () => void;
  theme: boolean;
};

type Props = {
  children: ReactNode;
};

const AnimacoesProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<boolean>(false);

  const switchTheme = () => {
    document.body.classList.toggle("dark");
    setTheme(!theme);
  };

  const Girar = (isOpen: boolean) => ({
    animate: { rotate: isOpen ? 180 : 0 },
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  });

  const Digitando = {
    initial: { width: 0 },
    animate: { width: "99%" },
    transition: {
      duration: 3,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  };

  const Cursor = {
    animate: {
      opacity: [1, 0, 1],
    },
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "loop" as const,
    },
  };

  const sobeDesce = {
    animate: { y: [0, -15, 0] },
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
    },
  };

  const sobeDesce2 = {
    animate: { y: [0, 10, 0] },
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
    },
  };

  const sobeDesce3 = {
    animate: { y: [0, -20, 0] },
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
    },
  };

  const aparecer = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      duration: 2,
      ease: "easeInOut" as const,
    },
  };

  return (
    <AnimacoesContext.Provider
      value={{
        sobeDesce,
        sobeDesce2,
        sobeDesce3,
        Digitando,
        Cursor,
        aparecer,
        Girar,
        switchTheme,
        theme,
      }}
    >
      {children}
    </AnimacoesContext.Provider>
  );
};

export default AnimacoesProvider;
