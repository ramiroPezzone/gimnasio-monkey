import { Navigation } from "./components/js/Navigation";
import { Header } from "./components/js/Header";
import { Nosotros } from "./components/js/Nosotros";
import { Cronograma } from "./components/js/Cronograma";
import { Coaches } from "./components/js/Coaches";
import { Contacto } from "./components/js/Contacto";
import { Footer } from "./components/js/Footer";
import { LogoWhatsapp } from "./components/js/LogoWhatsapp";

function App() {
  return (
    <>
      <div className="direccionadorAHome" id="home" />
      <Navigation />
      <Header />
      <LogoWhatsapp />
      <Nosotros />
      <Cronograma />
      <Coaches />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
