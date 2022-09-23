import { AiOutlineSearch } from 'react-icons/ai';
import styles from '../styles/Busqueda.module.css';
import { useNavigate } from "react-router-dom";
import { useQuery } from '../hooks/useQuery';


function Busqueda() {

  const query = useQuery();
  const search = query.get("search");

  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className={styles.busquedaContainer} onSubmit={handleSubmit}>
      <div action="" className={styles.busquedaBox}>
        
        <input 
          className={styles.busquedaInput} type="text" 
          value={search ?? ""}
          placeholder='Search'
          aria-label='Search Movies'
          onChange={(e) => {
            const value = e.target.value;
            navigate("/?search=" + value);
          }}
        />
        
        <button className={styles.busquedaBtn} type='submit'>
          <AiOutlineSearch size={20}/>
        </button>
      
      </div>
    </form>
  )
}

export default Busqueda;