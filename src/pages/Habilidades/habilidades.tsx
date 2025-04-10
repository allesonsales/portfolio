import { useContext, useState } from "react";
import "./style.css";
import { AnimatePresence, motion } from "framer-motion";
import { AnimacoesContext } from "../../provider";

const Habilidades = () => {
  const [openHability, setOpenHability] = useState<string>("");
  const animacoes = useContext(AnimacoesContext);

  if (!animacoes) return null;

  const { Girar } = animacoes;

  const toggleSection = (section: string) => {
    setOpenHability(openHability === section ? "" : section);
  };

  const Transicao = (isOpenHability: boolean) => ({
    initial: {
      height: 0,
      opacity: 0,
    },
    animate: {
      height: isOpenHability ? "auto" : 0,
      opacity: 1,
    },
    exit: {
      height: 0,
      opacity: 0,
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  });

  return (
    <section id="habilidades">
      <div className="habilidadesContainer">
        <h2 className="titulos">__Habilidades__</h2>
        <div className="habilidade">
          <div
            className="habilidadeTitulo"
            onClick={() => toggleSection("frontend")}
          >
            <div className="habilidadeDescricao">
              <span className="icon-park-outline--muscle"></span>
              <h3 className="subTitulo">HardSkills</h3>
            </div>
            <motion.span
              {...Girar(openHability === "frontend")}
              className="iconamoon--arrow-down-2-bold"
            ></motion.span>
          </div>
          <AnimatePresence>
            {openHability === "frontend" && (
              <motion.ul {...Transicao(openHability === "frontend")}>
                <li>
                  <span className="bxs--file-html"></span>
                  <b className="skill">HTML</b>
                </li>
                <li>
                  <span className="bxs--file-css"></span>
                  <b>CSS</b>
                </li>
                <li>
                  <span className="ri--javascript-fill"></span>
                  <b>Javascript</b>
                </li>
                <li>
                  <span className="mdi--react"></span>
                  <b>ReactJS</b>
                </li>
                <li>
                  <span className="lineicons--typescript"></span>
                  <b>TypeScript</b>
                </li>
                <li>
                  <span className="vscode-icons--file-type-scss"></span>
                  <b>Sass</b>
                </li>
                <li>
                  <span className="icon-park-solid--robot-one"></span>
                  <b>Microsoft Copilot Studio</b>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <div className="habilidade">
          <div
            className="habilidadeTitulo"
            onClick={() => toggleSection("softskills")}
          >
            <div className="habilidadeDescricao">
              <span className="lucide--brain"></span>
              <h3 className="subTitulo soft">SoftSkills</h3>
            </div>
            <motion.span
              {...Girar(openHability === "softskills")}
              className="iconamoon--arrow-down-2-bold"
            ></motion.span>
          </div>
          {openHability === "softskills" && (
            <motion.ul {...Transicao(openHability === "softskills")}>
              <li>Adaptabilidade</li>
              <li>Autodidata</li>
              <li>Pró Ativo</li>
              <li>Resolutivo</li>
              <li>Trabalho em Equipe</li>
            </motion.ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
