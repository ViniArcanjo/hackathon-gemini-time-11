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
    const [busca, setBusca] = useState('');

    // const [lista, setLista] = useState([]); 

    const {id} = useParams();

    useEffect(() => {
        getDetalhes(id).then((response) => {
          setRestaurante(response);
          /* setCardapio(response) */
          setLoading(false);
          console.log(response);
        })
      }, [id]);
    
    // Feature do filtro de busca incompleta:
    
    /* function testaBusca(text) {
        const regex = new RegExp(busca, 'i');
        return regex.test(text);
    }

    useEffect(() => {
        let novaLista;

        if (restaurante.cardapio) {
            novaLista = restaurante.cardapio.filter(item => testaBusca(item.descricao) || testaBusca(item.nome));
        }
        
        console.log(novaLista)
        setLista(novaLista);
      }, [busca]) */
    

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

                <input type="text" placeholder="Buscar no cardápio" className={styles.busca} onChange={(e) => setBusca(e.target.value)} value={busca} />

                <div>
                    <Cardapio cardapio={restaurante.cardapio} />
                </div>
            </div>
        </div>
    )

}

export default RestauranteDetalhe;