import PeliCard from './PeliCard';
import styles from '../styles/PeliculasGrid.module.css';
import { useEffect, useState } from 'react';
import { get } from '../utils/httpCliente';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import Vacio from './Vacio';


export function Peliculas({ search }){
  const [peliculas, setPeliculas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() =>{
    setIsLoading(true);
    const searchUrl = search ? 
      "/search/movie?query=" + search + "&page=" + page 
      : "/discover/movie?page=" + page;
    get(searchUrl).then(data => {
      setPeliculas((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages)
      setIsLoading(false);
    });
  }, [search, page]);

  if(!isLoading && peliculas.length === 0){
    return <Vacio/>
  }

  return (
    <InfiniteScroll
      dataLength={peliculas.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner/>}
    >
      <ul className={styles.pelisGrid}>
        {peliculas.map((pelicula) => (
          <PeliCard key={pelicula.id} pelicula={pelicula} />
        ))}
      </ul>
    </InfiniteScroll>
  );
  

}
