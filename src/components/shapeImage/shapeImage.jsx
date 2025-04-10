import { useContext } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { AnimacoesContext } from "../../provider";

const ShapeImage = () => {
  const { sobeDesce, sobeDesce2, sobeDesce3 } = useContext(AnimacoesContext);

  return (
    <div className="shapeContainer">
      <div className="shape">
        <motion.div className="ball1" {...sobeDesce}></motion.div>
        <motion.div className="ball2" {...sobeDesce2}></motion.div>
        <motion.div className="ball3" {...sobeDesce3}></motion.div>
        <div className="shapeImage"></div>
      </div>
    </div>
  );
};

export default ShapeImage;
