import Logo from "./logo.png"
import Style from "./header.module.css";
import Pesquisa from "./Pesquisa.svg";
import Heart from "./Heart.svg";
import User from "./Usuario.svg";
import Car from "./Car.svg";

function HeaderPg ()
{
    return(
        <article className={Style.header}>
            <div>
                <img src={Logo} alt="" className={Style.logo}/>
            </div>
            <div>
                <input type="text" placeholder="O que você está procurando"  className={Style.pesquisa}></input>
            </div>
            <div className={Style.lista}>
                <img src={Heart} alt="" />
                <span className={Style.desejos}>Lista de desejos</span>
            </div>
            <div className={Style.Entrar}>
                <img src={User} alt="" className={Style.use}/>
                <span className={Style.user}>Entrar</span>
            </div>
            <div className={Style.Car}>
                <img src={Car} alt="" className={Style.Carro}/>
            </div>
        </article>
    )
}

export default HeaderPg;