import { useContext } from "react";
import ShapeImage from "../../components/shapeImage/shapeImage";
import "./style.css";
import { AnimacoesContext } from "../../provider";
import { motion } from "framer-motion";
import IconsContact from "../../components/IconsContact/iconsContact";
import MenuDesktop from "../../components/menuDesktop/menuDesktop";

const Home = () => {
  const { Digitando, Cursor } = useContext(AnimacoesContext);

  return (
    <section id="home">
      <div className="top">
        <IconsContact />
        <MenuDesktop />
      </div>
      <div className="homeContainer">
        <div className="homeTitle">
          <div className="title">
            <h1>
              Olá, me chamo <b className="destaque">Alleson!</b>
            </h1>
            <div className="textTyping">
              <motion.h2 {...Digitando} className="digitando">
                Desenvolvedor Fullstack
              </motion.h2>
              <motion.span {...Cursor} className="cursor">
                |
              </motion.span>
            </div>
            <p>
              Entregando não apenas interfaces modernas e responsivas, mas
              também <span className="textoDestaque">experiências</span> que
              fazem a diferença. Meu diferencial é a formação em Design Digital
              e mais de 12 anos de experiência{" "}
              <span className="textoDestaque">criativa</span>, o que me permite
              unir estética e usabilidade para criar produtos funcionais e{" "}
              <span className="textoDestaque">impactantes</span>.
            </p>
            <a href="/portfolio/AllesonSales.pdf" target="blank">
              <button className="curriculo">
                <i className="bi bi-arrow-down"></i>
                CV
              </button>
            </a>
          </div>
          <div className="imageHome">
            <ShapeImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
