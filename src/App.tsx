import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Nav />
      <Footer />
    </>
  );
}

export default App;
