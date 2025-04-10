import { useContext, useState } from "react";
import "./style.css";
import "../icons.css";
import { motion } from "framer-motion";
import { AnimacoesContext } from "../../provider";

const MenuMobile = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const animacoes = useContext(AnimacoesContext);

  if (!animacoes) return null;

  const { switchTheme, theme } = animacoes;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const Transicao = (menuOpen: boolean) => ({
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: menuOpen ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    exit: {
      y: "100%",
      opacity: 0,
    },
    transition: { duration: 0.5, ease: "easeInOut" },
  });

  return (
    <div className="menu">
      <div className="logo">
        <h2>AS/</h2>
      </div>
      <div className="menuSide">
        <div className="theme" onClick={switchTheme}>
          <i
            className={theme ? "bi bi-brightness-high-fill" : "bi bi-moon-fill"}
          ></i>
        </div>
        <div className="menuMobile" onClick={toggleMenu}>
          {menuOpen ? (
            <i className="bi bi-x-lg"></i>
          ) : (
            <i className="bi bi-grid-fill"></i>
          )}
          <motion.ul
            {...Transicao(menuOpen)}
            style={{ display: menuOpen ? "flex" : "none" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <li>
              <a href="#home">
                <i className="bi bi-house"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#habilidades">
                <i className="bi bi-card-checklist"></i>
                <span>Habilidades</span>
              </a>
            </li>
            <li>
              <a href="#projetos">
                <i className="bi bi-images"></i>
                <span>Projetos</span>
              </a>
            </li>
            <li>
              <a href="#contato">
                <i className="bi bi-telephone"></i>
                <span>Contato</span>
              </a>
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
