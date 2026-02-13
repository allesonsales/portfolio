import "./App.css";
import Habilidades from "./pages/Habilidades/habilidades";
import Home from "./pages/home/home";
import AnimacoesProvider from "./provider";
import MenuMobile from "./components/menuMobile/menuMobile";
import Projetos from "./pages/projetos/projetos";
import Contato from "./pages/contato/contato";
import ArrowUp from "./components/arrowUp/arrowUp";

function App() {
  return (
    <>
      <AnimacoesProvider>
        <ArrowUp />
        <nav>
          <MenuMobile />
        </nav>
        <Home />
        <Habilidades />
        <Projetos />
        <Contato />
      </AnimacoesProvider>
    </>
  );
}

export default App;
