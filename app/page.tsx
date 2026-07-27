import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';
import { FAQSection, HospitalityTeaser, ProblemsSection, ProofStrip } from './components/StudioPages';

const Home = () => {
  return (
    <main className='min-h-screen'>
      <StructuredData />
      <Navbar />
      <Hero />
      <ProofStrip />
      <Portfolio />
      <Services />
      <ProblemsSection />
      <HospitalityTeaser />
      <Process />
      <About />
      <FAQSection />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
