import React from 'react'
import styles from '../css/Contacto.module.css'
import { TituloSection } from './TituloSection'

export const Contacto = () => {
  return (
    <>
      <TituloSection titulo="CONTACTO" id="contacto" />
      <div className={styles.containerIconosContacto}>
        <div className={styles.itemContacto}>
          <a href="https://wa.me/5493425210280" rel="noreferrer noopener" target="_blank">
            <div className={`${styles.iconoContacto} ${styles.iconoWhatsapp}`} />
            <p>+54 9 3425 21-0280</p>
          </a>
        </div>
        <div className={styles.itemContacto}>
          <div className={`${styles.iconoContacto} ${styles.iconoUbicacion}`} />
          <p>Blas Parera 8448</p>
        </div>
      </div>
      <div className={styles.containerMapa}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.8768785950674!2d-60.72854338521564!3d-31.582424011462248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b507abf104a72f%3A0x52fc3b833703a63e!2sAv.%20Blas%20Parera%208448%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1649641893698!5m2!1ses-419!2sar" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}
