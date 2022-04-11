import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from '../css/Navigation.module.css'
import logo from '../../assets/imgs/logo.png'

export const Navigation = () => {
    return (
        <div className={styles.containerFixedNavbar}>
            <Navbar expand="lg" variant="dark" className={styles.containerNavbar}>
                <Container>
                    <a className={styles.containerLogoNavbar} href="#home">
                        <img src={logo} alt="logo monkey" className={styles.logoNavbar} />
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#nosotros" className={styles.link}>Nosotros
                                <div className={styles.subrayadoLinks} />
                            </Nav.Link>
                            <Nav.Link href="#campoSur" className={styles.link}>Complejo campo sur
                                <div className={styles.subrayadoLinks} />
                            </Nav.Link>
                            <Nav.Link href="#actividades" className={styles.link}>Actividades
                                <div className={styles.subrayadoLinks} />
                            </Nav.Link>
                            <Nav.Link href="#coaches" className={styles.link}>Coaches
                                <div className={styles.subrayadoLinks} />
                            </Nav.Link>
                            <Nav.Link href="#contacto" className={styles.link}>Contacto
                                <div className={styles.subrayadoLinks} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}