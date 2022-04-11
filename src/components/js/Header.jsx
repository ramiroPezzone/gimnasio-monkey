import React from 'react'
import { Carousel } from "react-bootstrap";
import styles from '../css/Header.module.css'
import BtnHeader from './BtnHeader';
import logo from '../../assets/imgs/logo.png'

export const Header = () => {
  return (
      <Carousel className={styles.containerCarousel}>
        <Carousel.Item>
          <div className={`${styles.imagen1} ${styles.imagenCarrusel}`} />
          <Carousel.Caption>
            <img src={logo} alt="logo monkey" className={styles.logo} />
            <BtnHeader
              section="nosotros"
              nameSection="quienes somos"
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className={`${styles.imagen2} ${styles.imagenCarrusel}`} />
          <Carousel.Caption>
            <img src={logo} alt="logo monkey" className={styles.logo} />
            <BtnHeader
              section="actividades"
              nameSection="actividades"
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className={`${styles.imagen3} ${styles.imagenCarrusel}`} />
          <Carousel.Caption>
            <img src={logo} alt="logo monkey" className={styles.logo} />
            <BtnHeader
              section="coaches"
              nameSection="coaches"
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className={`${styles.imagen4} ${styles.imagenCarrusel}`} />
          <Carousel.Caption>
            <img src={logo} alt="logo monkey" className={styles.logo} />
            <BtnHeader
              section="contacto"
              nameSection="contacto"
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  )
}
