import React from 'react'
import styles from '../styles/Spinner.module.css';
import { ImSpinner8 } from 'react-icons/im';

function Spinner() {
  return (
    <div className={styles.spinner}>
      <ImSpinner8 
        className={styles.spinning}
        size={60}/>
    </div>
  )
}

export default Spinner