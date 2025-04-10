import Logo from "../logo/logo";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="containerFooter">
        <Logo />
        <div className="logoFooter">
          <span>Alleson Sales</span>
          <small>Desenvolvedor Frontend</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
