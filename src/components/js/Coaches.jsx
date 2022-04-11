import React from 'react'
import styles from '../css/Coaches.module.css'
import { TituloSection } from './TituloSection'
import coach1 from '../../assets/imgs/mili.png'
import coach2 from '../../assets/imgs/Coach2.png'
import coach3 from '../../assets/imgs/Coach3.png'

export const Coaches = () => {
  return (
    <div>
      <TituloSection titulo="COACHES" id="coaches" />
      <div className={styles.containerCoaches}>
        {/* COACH 1 */}
            <div className={styles.containerCardCoach}>
              <img src={coach1} alt="Foto de Mili" />
              <h4>MILI</h4>
            </div>
            {/*  */}
        {/* COACH 2 */}
            <div className={styles.containerCardCoach}>
              <img src={coach2} alt="Foto de coach2" />
              <h4>COACH 2</h4>
            </div>
            {/*  */}
        {/* COACH 3 */}
            <div className={styles.containerCardCoach}>
              <img src={coach3} alt="Foto de coach3" />
              <h4>COACH 3</h4>
            </div>
            {/*  */}

      </div>
    </div>
  )
}
