import PeliCard from './PeliCard';
import styles from '../styles/PeliculasGrid.module.css';
import { useEffect, useState } from 'react';
import { get } from '../utils/httpCliente';
import Spinner from './Spinner';
import { useQuery } from '../hooks/useQuery';



export function Peliculas(){
  const [peliculas, setPeliculas] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() =>{
    setIsLoading(true);
    const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie";
    get(searchUrl).then(data => {
      setPeliculas(data.results);
      setIsLoading(false);
    });
  }, [search]);

  if(isLoading){
    return <Spinner/>
  }

  return (
    <ul className={styles.pelisGrid}>
      {peliculas.map((pelicula) => (
        <PeliCard key={pelicula.id} pelicula={pelicula} />
      ))}
    </ul>
  );
  

}
