import Header from './components/Header';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import Features from './components/Features';
import Personas from './components/Personas';
import Codex from './components/Codex';
import Steps from './components/Steps';
import Interface from './components/Interface';
import Reviews from './components/Reviews';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Header />
      <main>
        <Hero />
        <Integrations />
        <Features />
        <Personas />
        <Codex />
        <Steps />
        <Interface />
        <Reviews />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
