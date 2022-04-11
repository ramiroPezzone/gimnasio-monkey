import React from 'react'
import { Carousel } from "react-bootstrap";
import styles from '../css/Header.module.css'

export const Header = () => {
  return (
    <Carousel className={styles.containerCarousel} variant="dark" id="nosotros">
      <Carousel.Item>
        <div className={`${styles.imagen1} ${styles.imagenCarrusel}`} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={`${styles.imagen2} ${styles.imagenCarrusel}`} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={`${styles.imagen3} ${styles.imagenCarrusel}`} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={`${styles.imagen4} ${styles.imagenCarrusel}`} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={`${styles.imagen5} ${styles.imagenCarrusel}`} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>)
}
