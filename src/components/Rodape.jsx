import Style from "./Rodape.module.css";
import Logo from "./logo.png";
import Telefone from "./Telefone.svg";
import Tok from "./Tiktok.svg";
import Face from "./facebook.svg";
import Insta from "./insta.svg";
import Whats from "./whats.svg";

function Rodape()
{
    return(
        <section className={Style.tudo}>
            <div className={Style.geral}>
                <div>
                    <img src={Logo} alt="" className={Style.logo}/>
                </div>
                <div className={Style.icones}>
                    <img src={Telefone} alt="" className={Style.icon}/>
                    <img src={Tok} alt="" className={Style.icon}/>
                    <img src={Face} alt="" className={Style.icon}/>
                    <img src={Insta} alt="" className={Style.icon}/>
                    <img src={Whats} alt="" className={Style.icon}/>
                </div>
            </div>
            <div className={Style.termos}>
                <span>Termos e Condições</span>
                <span>Privacidade</span>
                <span>Contate-Nos</span>
                <span>Netshoes Empresa</span>
                <span>Transportadora</span>
            </div>
        </section>
    )
}

export default Rodape;