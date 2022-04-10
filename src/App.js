import { Header } from "./components/js/Header";
import { Navigation } from "./components/js/Navigation";
import { Cronograma } from "./components/js/Cronograma";
import { ComplejoCampoSur } from "./components/js/ComplejoCampoSur";
import { Coaches } from "./components/js/Coaches";
import { Contacto } from "./components/js/Contacto";
import { Footer } from "./components/js/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <ComplejoCampoSur />
      <Cronograma />
      <Coaches />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
