import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import styles from "../styles/PeliDetails.module.css";
import getPeliculaImg from '../utils/getPeliculaImg';
import { get } from "../utils/httpCliente";

export function PeliDetails(){
  const { peliculaId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [pelicula, setPelicula] = useState(null);
  
  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + peliculaId).then(data =>{

      setPelicula(data);
      setIsLoading(false);

    })
  }, [peliculaId])

  if(isLoading){
    return <Spinner/>
  }


  const imgUrl = getPeliculaImg(pelicula.poster_path)

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