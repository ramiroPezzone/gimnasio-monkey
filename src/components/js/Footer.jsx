import React from 'react'
import styles from '../css/Footer.module.css'
import logoPR from '../../assets/imgs/logoPRFondoTransp.png'

export const Footer = () => {
  return (
    <footer>
      <div className={styles.infoFooter}>
        <p>® 2022 Monkey. Todos los derechos reservados.</p>
        <p>Powered by <a href="https://www.linkedin.com/in/ramiro-c-pezzone-desarrollador-web/" rel="noreferrer noopener"><img src={logoPR} alt="logoPR" /></a></p>
      </div>
    </footer>
  )
}
