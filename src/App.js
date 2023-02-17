import './App.css';
import Header from './components/header/Header.jsx'
import Hero from './components/hero/hero.jsx'
import Habilities from './components/habilities/Habilities';
import Proyects from './components/projects/Proyects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Habilities />
      <Proyects />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
