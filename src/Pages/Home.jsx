import { useEffect, useState } from "react";

function Home() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c7d8e8d9be43a4e32dd78acd1c4bc0aa&language=es-ES&page=1"
    )
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px", background: "#111", color: "#fff" }}>
      <h1 style={{ textAlign: "center" }}>Películas Populares</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {peliculas.map((peli) => (
          <div
            key={peli.id}
            style={{
              background: "#222",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
              alt={peli.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h2 style={{ fontSize: "16px" }}>{peli.title}</h2>
            <p>{peli.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
