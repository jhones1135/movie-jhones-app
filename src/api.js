const API_KEY = "1f6c36d4fbd8c2d5fbba4c3a66b7f4f8";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error al obtener películas populares:", error);
    return [];
  }
};

export const getMovieDetail = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=es-ES`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener detalle de la película:", error);
    return null;
  }
};
