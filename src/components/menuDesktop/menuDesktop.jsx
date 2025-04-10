import { useContext } from "react";
import "./style.css";
import { AnimacoesContext } from "../../provider";

const MenuDesktop = () => {
  const { switchTheme, theme } = useContext(AnimacoesContext);
  return (
    <div className="menuDesktop">
      <ul>
        <li>
          <a href="#">Sobre mim</a>
        </li>
        <li>
          <a href="#habilidades">Habilidades</a>
        </li>
        <li>
          <a href="#projetos">Projetos</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
        <li>
          <i
            onClick={switchTheme}
            className={theme ? "bi bi-brightness-high-fill" : "bi bi-moon-fill"}
          ></i>
        </li>
      </ul>
    </div>
  );
};

export default MenuDesktop;
