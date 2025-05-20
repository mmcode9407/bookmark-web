import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />
      </main>

      <Footer />
    </>
  );
}

export default App;
