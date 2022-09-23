import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import styles from '../styles/Busqueda.module.css';
import { useNavigate } from "react-router-dom";
import { useQuery } from '../hooks/useQuery';


function Busqueda() {

  const query = useQuery();
  const search = query.get("search");

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setSearchText(search || "");
  }, [search])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/?search=" + searchText);
  }

  return (
    <form className={styles.busquedaContainer} onSubmit={handleSubmit}>
      <div action="" className={styles.busquedaBox}>
        
        <input 
          className={styles.busquedaInput} type="text" 
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        
        <button className={styles.busquedaBtn} type='submit'>
          <AiOutlineSearch size={20}/>
        </button>
      
      </div>
    </form>
  )
}

export default Busqueda;