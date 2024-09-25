import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <h1 className='text-2xl text-black font-bold' data-aos="fade-up">
        Hello World?!
      </h1>
    </>
  );
}

export default App;
