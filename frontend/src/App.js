import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-200 font-sans flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-6xl mx-auto bg-[#111214] rounded-2xl shadow-2xl shadow-black/30 overflow-hidden">
        <div className="p-6 sm:p-8 md:p-12 space-y-16 md:space-y-24">
          <Header />
          <Hero />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
