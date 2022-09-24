import Api from "./api";

export async function getDetalhes(id) {
  try {
    const restaurantes = await Api.get(`/detalhes/${id}.json`);
    return restaurantes.data;
  } catch (err) {
    throw err;
  }
};