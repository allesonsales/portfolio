import { useContext, useEffect, useState } from "react";
import "./style.css";
import { AnimacoesContext } from "../../provider";
import { AnimatePresence, motion } from "framer-motion";

const ArrowUp = () => {
  const [scroller, setScroller] = useState<boolean>(false);
  const animacoes = useContext(AnimacoesContext);

  if (!animacoes) return null;

  const { aparecer } = animacoes;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroller(true);
      } else {
        setScroller(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="arrowUp">
      <a href="#home">
        <AnimatePresence>
          {scroller && (
            <motion.i
              {...aparecer}
              className="bi bi-arrow-up-circle"
            ></motion.i>
          )}
        </AnimatePresence>
      </a>
    </div>
  );
};

export default ArrowUp;
