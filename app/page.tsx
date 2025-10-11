import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import Process from './components/Process';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <TechStack />
      <Process />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
