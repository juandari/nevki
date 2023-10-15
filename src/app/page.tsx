import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Footer from "./components/footer";

export default async function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
