import React from 'react'
import { BsEmojiFrown } from 'react-icons/bs';
import styles from '../styles/Vacio.module.css';

function Vacio() {
  return (
    <div className={styles.vacio}>
      Sorry, we can't find it. No results. 
      <div className={styles.carita}>
        <BsEmojiFrown size={50} />
      </div>
    </div>
  )
}

export default Vacio;