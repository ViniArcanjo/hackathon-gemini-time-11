import React from "react";
import { useNavigate } from "react-router-dom";
import "./RestauranteCard.css";

function RestauranteCard({ restaurante }) {
  const navigate = useNavigate();
  return (
    <div className="restaurante__card" onClick={() => navigate("/detalhes/" + restaurante.id)}>
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
            : `R$${restaurante.valor_entrega}`}
        </p>
      </div>
    </div>
  );
}



export default RestauranteCard;
