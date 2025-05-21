import { Extension } from "./components/Extensions/Extension";
import { Faq } from "./components/Faq/Faq";
import { Features } from "./components/Features/Features";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navigation } from "./components/Navigation/Navigation";
import { Newsletter } from "./components/Newsletter/Newsletter";

function App() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />

        <Features />

        <Extension />

        <Faq />

        <Newsletter />
      </main>

      <Footer />
    </>
  );
}

export default App;
