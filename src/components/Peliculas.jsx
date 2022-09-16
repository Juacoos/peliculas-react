import pelis from '../json/peliculas.json';
import PeliCard from './PeliCard';
import styles from '../styles/PeliculasGrid.module.css';
export function Peliculas(){
  return (
    <ul className={styles.pelisGrid}>
      {pelis.map((pelicula) => (
        <PeliCard key={pelicula.id} pelicula={pelicula} />
      ))}
    </ul>
  );
}