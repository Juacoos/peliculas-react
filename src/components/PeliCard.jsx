import { Link } from 'react-router-dom';
import styles from '../styles/PeliCard.module.css';

function PeliCard({pelicula}){
  const imgUrl = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path;
  return (
    <li className={styles.peliCard}>
      <Link to={"/pelicula/" + pelicula.id}>
        <img 
          src={imgUrl} 
          className={styles.movieImg} 
          alt={pelicula.title}
        />
        <div>{pelicula.title}</div>
      </Link>
    </li>
  );
}

export default PeliCard;