import PeliCard from './PeliCard';
import styles from '../styles/PeliculasGrid.module.css';
import { useEffect, useState } from 'react';
import { get } from '../utils/httpCliente';



export function Peliculas(){
  const [peliculas, setPeliculas] = useState([]);

  

  useEffect(() =>{
    get("/discover/movie").then(data => {
      setPeliculas(data.results);
    });
  }, []);
  return (
    <ul className={styles.pelisGrid}>
      {peliculas.map((pelicula) => (
        <PeliCard key={pelicula.id} pelicula={pelicula} />
      ))}
    </ul>
  );
}