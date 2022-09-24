import React from "react";
import "./RestauranteCard.css"

function RestauranteCard({ restaurante }) {



    return (
        <div className="">
            <div><img src={restaurante.imagem} alt={restaurante.nome} /></div>
            <div>
                <h2>
                    {restaurante.nome}
                </h2>
                <p>
                    {restaurante.distancia}
                </p>
                <p>
                    {restaurante.nota}
                </p>
                <p>
                    {restaurante.tempo_medio} - {restaurante.valor_entrega == 0 ? "Grátis" : restaurante.valor_entrega}
                </p>

            </div>
        </div>

    )
}

export default RestauranteCard;