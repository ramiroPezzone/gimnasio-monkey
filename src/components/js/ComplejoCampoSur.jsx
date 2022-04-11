import React from 'react'
import styles from '../css/ComplejoCampoSur.module.css'
import { TituloSection } from './TituloSection'
import fotoProvisoriaCampoSur from '../../assets/imgs/fotoProvisoriaCampoSur.png'

export const ComplejoCampoSur = () => {
  return (
    <div>
      <TituloSection titulo="COMPLEJO CAMPO SUR" id="campoSur" />
      <div className={styles.containerPresentacionCampoSur}>
        <h3>
          Texto de presentación de Campo Sur
        </h3>
        <img src={fotoProvisoriaCampoSur} alt="Foto provisoria campo sur" />
      </div>
    </div>
  )
}
