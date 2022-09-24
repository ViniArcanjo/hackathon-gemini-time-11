import React from "react"
import { Container, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestauranteCard from "../../components/RestauranteCard";
import { getDetalhes } from "../../services/detalhes.service";


function RestauranteDetalhe() {

    const [restaurante, setRestaurante] = useState({});
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        getDetalhes(id).then((response) => {
          setRestaurante(response);
          setLoading(false);
          console.log(response);
        })
      }, [id]);

    return (
        <Container class="restaurantes">
            <div>
                {loading && (
                    <div className="loading">
                    <CircularProgress color="primary" />
                    </div>
                )}
                <div>
                    <RestauranteCard restaurante={restaurante} />
                </div>
                <div>
                    <p>{restaurante.descricao}</p>
                    <p>{restaurante.endereco}</p>
                </div>
            </div>
        </Container>
    )

}

export default RestauranteDetalhe;