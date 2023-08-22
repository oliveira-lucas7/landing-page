import Style from "./conteudo-dois.module.css";
import Dois from "./dois.svg";

function SegundoConteudo()
{
    return(
        <section className={Style.Tudo}>
            <div className={Style.Imagens}>
                <img src={Dois} alt="" className={Style.produto}/>
                <img src={Dois} alt="" className={Style.produto} />
                <img src={Dois} alt="" className={Style.produto} />
            </div>
            <div className={Style.Botoes}>
                <button className={Style.Bot}>Compre Já</button>
                <button className={Style.Bot}>Compre Já</button>
                <button className={Style.Bot}>Compre Já</button>
            </div>
        </section>
    )
}

export default SegundoConteudo;
