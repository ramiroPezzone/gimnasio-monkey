import React from 'react'
import styles from '../css/LogoWhatsapp.module.css'
import logoWhatsapp from '../../assets/imgs/logoWhatsapp.png'

export const LogoWhatsapp = () => {
    return (
        <a href="https://wa.me/5493425210280" rel="noreferrer noopener" target="_blank" className={styles.linkWhatsapp}>
            <img src={logoWhatsapp} alt="Logo whatsapp" />
        </a>
    )
}
