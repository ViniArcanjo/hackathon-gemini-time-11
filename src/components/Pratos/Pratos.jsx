import React from "react";
import styles from './Pratos.module.css'

function Pratos({ prato }) {
  return (
    <div className="restaurante__card">
      <div className="restaurante__card--img">
        <img src={prato.imagem} alt={prato.nome} />
      </div>
      <div className="restaurante__card--content">
        <h2>{prato.nome}</h2>
        <p>{prato.descricao}</p>
        <div className={styles.preco}>
          <p>{prato.valor}</p>
        </div>
      </div>
      
    </div>
  );
}

export default Pratos;