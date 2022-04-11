import React from 'react'
import styles from '../css/TituloSection.module.css'
import claws from '../../assets/imgs/claws.png'

export const TituloSection = (props) => {
    return (
        <div className={styles.containerTitulo}>
            <h2>{props.titulo}</h2>
            <img src={claws} alt="garras" />
        </div>
    )
}
