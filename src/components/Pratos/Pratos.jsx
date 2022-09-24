import React from "react";

function Pratos({ prato }) {
  return (
    <div className="restaurante__card">
      <div className="restaurante__card--img">
        <img src={prato.imagem} alt={prato.nome} />
      </div>
      <div className="restaurante__card--content">
        <h2>{prato.nome}</h2>
        <p>{prato.descricao}</p>
      </div>
      <div>
        <h2>{prato.valor}</h2>
      </div>
    </div>
  );
}

export default Pratos;