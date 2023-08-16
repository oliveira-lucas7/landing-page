import { useState } from "react";

function BoasVindas() 
{
    const [ nome, setNome ] = useState( '' );


    return(
        <>
            <div>
                <input type="text" onChange={ (e) => {setNome( e.target.value )}} />
            </div>
            <div>
                <span>{nome}</span>
            </div>
        </>
    )
}
export default BoasVindas;
//O evento onChange é disparado ao ocorrer uma alteração dentro do input