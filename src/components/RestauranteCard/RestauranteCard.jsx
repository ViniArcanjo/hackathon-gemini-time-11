import React from "react";
import "./RestauranteCard.css";

function RestauranteCard({ restaurante }) {
  return (
    <div className="restaurante__card">
      <div className="restaurante__card--img">
        <img src={restaurante.imagem} alt={restaurante.nome} />
      </div>
      <div className="restaurante__card--content">
        <h2>{restaurante.nome}</h2>
        <p>{restaurante.distancia} km</p>
        <p className="restaurante__card--nota">{restaurante.nota}</p>
        <p>
          {restaurante.tempo_medio} -{" "}
          {restaurante.valor_entrega === 0.0
            ? "Grátis"
            : `R$${restaurante.valor_entrega.toFixed(2)}`}
        </p>
      </div>
    </div>
  );
}

export default RestauranteCard;
