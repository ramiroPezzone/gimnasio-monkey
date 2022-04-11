import React from 'react'
import styles from '../css/Nosotros.module.css'
import { TituloSection } from './TituloSection'

export const Nosotros = () => {
  return (
    <div id="nosotros" >
      <TituloSection titulo="NOSOTROS" id="nosotros" />
      <div className={styles.containerPresentacionNosotros}>
      <h3 className={styles.presentacionNosotros}>
        Somos Monkey! y bla bla bla y todo el chamuyo que se te ocurra
      </h3>
      </div>
    </div>
  )
}
