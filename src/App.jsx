import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#04091a]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clients />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
