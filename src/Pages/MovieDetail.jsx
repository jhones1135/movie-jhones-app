import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../api";

const MovieDetail = () => {
  const { id } = useParams(); // obtenemos el id de la URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieDetail(id);
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <p className="p-6">Cargando detalles...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-60 mb-4"
      />
      <p><strong>Fecha de estreno:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
      <p className="mt-4">{movie.overview}</p>
    </div>
  );
};

export default MovieDetail;
