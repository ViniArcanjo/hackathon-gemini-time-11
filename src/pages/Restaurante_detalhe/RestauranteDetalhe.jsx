import React from "react"
import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestauranteCard from "../../components/RestauranteCard";
import { getDetalhes } from "../../services/detalhes.service";
import styles from "./RestauranteDetalhe.module.css";
import Cardapio from '../../components/Cardapio';


function RestauranteDetalhe() {

    const [restaurante, setRestaurante] = useState({});
    const [loading, setLoading] = useState(true);
    /* const [cardapio, setCardapio] = useState(); */

    const {id} = useParams();

    useEffect(() => {
        getDetalhes(id).then((response) => {
          setRestaurante(response);
          /* setCardapio(response) */
          setLoading(false);
          console.log(response);
        })
      }, [id]);

    return (
        <div className={styles.container}>
            <div>
                {loading && (
                    <div className="loading">
                    <CircularProgress color="primary" />
                    </div>
                )}
                <div>
                    <RestauranteCard restaurante={restaurante} />
                </div>
                <div className={styles.infos}>
                    <p>{restaurante.descricao}</p>
                    <p>{restaurante.endereco}</p>
                </div>
                <div>
                    <Cardapio cardapio={restaurante.cardapio}/>
                </div>
            </div>
        </div>
    )

}

export default RestauranteDetalhe;