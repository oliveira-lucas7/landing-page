import Style from "./conteudo-um.module.css";
import Painel from "./foto netshoes.jpeg";

function PrimeiroConteudo()
{
    return(
        <div className={Style.Main}>
            <img src={Painel} alt="" className={Style.painel}/>
        </div>
    )
}

export default PrimeiroConteudo;