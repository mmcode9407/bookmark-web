import { Extension } from "./components/Extensions/Extension";
import { Faq } from "./components/Faq/Faq";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />

        <Extension />

        <Faq />
      </main>

      <Footer />
    </>
  );
}

export default App;
