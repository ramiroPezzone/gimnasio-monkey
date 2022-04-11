import React from 'react'
import styles from '../css/Cronograma.module.css'
import { TituloSection } from './TituloSection'

export const Cronograma = () => {
  return (
    <>
      <div className={styles.containerGralCronograma}>
        <TituloSection titulo="ACTIVIDADES" id="actividades"/>
        <div className={styles.gridContainerCronograma}>
          <div className={styles.actividad}></div>
          <div className={styles.horario}><p>Lunes a viernes</p></div>
          <div className={styles.actividad}><p>Cross Funcional</p></div>
          <div className={styles.horario}><p>09 hs</p></div>
          <div className={styles.actividad}><p>Cross Fit</p></div>
          <div className={styles.horario}><p>16 / 19 y 20 hs</p></div>
          <div className={styles.actividad}><p>Alta intensidad</p></div >
          <div className={styles.horario}><p>17 hs</p></div>
          <div className={styles.actividad}><p>Boxeo</p></div >
          <div className={styles.horario}><p>21 hs</p></div>
        </div >
      </div >
    </>
  )
}
