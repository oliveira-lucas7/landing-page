import "./Global.css";
import HeaderPg from "./components/header";
import Primeiro from "./components/Conteudo-um";
import Segundo from "./components/conteudo-dois";
import Rodape from "./components/Rodape"

function App(props) {
  return (
    <>
      <HeaderPg></HeaderPg>
      <Primeiro></Primeiro>
      <Segundo></Segundo>
      <Rodape></Rodape>
    </>
  );
}

export default App;