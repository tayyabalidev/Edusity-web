import logo from './logo.svg';
import './App.css';
import NavbarExamples from './components/Navbars/NavbarExamples';
import Hero from './components/Navbars/Hero/Hero';
import Program from './components/Navbars/Program/Program';
import Title from './components/Navbars/title/Title';
import About from './components/Navbars/about/About'
import Campus from './components/Navbars/campus/Campus';
import Testimonials from './components/Navbars/testimonial/Testimonials';
import Contact from './components/Navbars/contact/Contact';
import Footer from './components/Navbars/footer/Footer';
function App() {
  return (
    <div className="App">
      <NavbarExamples />
      <Hero />
      <div className='container'>
        <Title subTitle='OUR   PROGRAM' title='what we offer'/>
      <Program />
      <About />
      <Title subTitle='GALLERY' title='Campus Photos'/>
      <Campus />
      <Title subTitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials />
      <Title subTitle='CONTACT US' title='Get in Touch'/>
      <Contact />
      <Footer />

      </div>

    </div>
  );
}

export default App;
