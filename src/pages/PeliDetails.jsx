import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "../styles/PeliDetails.module.css";
import { get } from "../utils/httpCliente";

export function PeliDetails(){
  const { peliculaId } = useParams();
  const [pelicula, setPelicula] = useState(null);
  useEffect(() => {
    get("/movie/" + peliculaId).then(data =>{
      setPelicula(data);
    })
  }, [peliculaId])

  if (!pelicula) {
    return null;
  }

  const imgUrl = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img 
        className={`${styles.columna} ${styles.imgPelicula}`}
        src={imgUrl}
        alt={pelicula.title}
      />
      <div className={`${styles.columna} ${styles.details}`}>
        <p className={styles.firstItem}><strong>Title:</strong>{" "}
        {pelicula.title}</p>
        <p>
          <strong>Genres:</strong>{" "}
          {pelicula.genres.map(genero => genero.name).join(", ")}
        </p>
        <p><strong>Description:</strong>{" "}
        {pelicula.overview}</p>
      </div>
    </div>
  );
}