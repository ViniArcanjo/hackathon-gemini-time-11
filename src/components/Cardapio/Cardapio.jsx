import React from "react";
import Pratos from "../Pratos/";

function Cardapio({cardapio}) {

    return (
        <div>
            {cardapio?.map((item, index) => (
                <div key={index}>
                    <h2>{item.categoria}</h2>
                    <div>
                        {item.itens?.map((prato, index) => (
                          <Pratos key={index} prato={prato}/>
                          
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cardapio;