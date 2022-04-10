import React from 'react'
import { Carousel } from "react-bootstrap";
import styles from '../css/Header.module.css'

export const Header = () => {
  return (
    <Carousel fade className={styles.containerCarousel} variant="dark">
      <Carousel.Item>
        <div className={`${styles.imagen1} ${styles.imagenCarrusel}`} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={`${styles.imagen2} ${styles.imagenCarrusel}`} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={`${styles.imagen3} ${styles.imagenCarrusel}`} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={`${styles.imagen4} ${styles.imagenCarrusel}`} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>)
}
