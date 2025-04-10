import Footer from "../../components/footer/footer";
import IconsContact from "../../components/IconsContact/iconsContact";
import "./style.css";

const Contato = () => {
  return (
    <>
      <section id="contato">
        <div className="contatoContainer">
          <h2 className="titulos">__Contato__</h2>
          <h3>
            <b>E aí, bora trampar juntos?</b>😊
            <IconsContact />
          </h3>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contato;
