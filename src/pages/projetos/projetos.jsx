import datajson from "../../data.json";
import { useContext, useEffect, useState } from "react";
import "./style.css";
import { AnimacoesContext } from "../../provider";
import { motion, AnimatePresence } from "framer-motion";

const Projetos = () => {
  const [list, setList] = useState([]);
  const animacoes = useContext(AnimacoesContext);

  if (!animacoes) return null;

  const { sobeDesce2 } = animacoes;

  useEffect(() => {
    if (datajson) {
      setList(datajson);
    } else {
      return null;
    }
  }, []);

  return (
    <section id="projetos">
      <div className="projetosContainer">
        <h2 className="titulos">__Projetos__</h2>
        {list &&
          list.map(
            ({ name, link, mobile, description, git, tecnologias }, index) => (
              <div className="projeto" key={index}>
                <div className="imagemProjeto">
                  <AnimatePresence>
                    <motion.img src={mobile} alt={name} {...sobeDesce2} />
                  </AnimatePresence>
                </div>
                <div className="descricaoProjeto">
                  <span className="tituloProjeto">{name}</span>
                  <p className="textoProjeto">{description}</p>
                  <div className="tecnologiasProjeto">
                    <span>Tecnologias utilizadas:</span>
                    <b>{tecnologias}</b>
                  </div>
                  <div className="linksProjeto">
                    <div className="link">
                      <a href={link} target="blank">
                        <button>
                          <i class="fa-regular fa-hand-pointer"></i>
                        </button>
                        <span>Link Projeto</span>
                      </a>
                    </div>
                    <div className="link">
                      <a href={git} target="blank">
                        <button>
                          <i class="fa-brands fa-github"></i>
                        </button>
                        <span>Código github</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </section>
  );
};

export default Projetos;
