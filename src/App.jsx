import Toggle from './Components/Toggle.jsx';
import TypingEffect from './Components/TypingEffect.jsx';
import Projects from './Components/Projects.jsx';
import Education from './Components/Education.jsx';
import Navbar from './Components/Navbar.jsx';
import About from './Components/About.jsx';
import Links from './Components/Links.jsx';
import ContactForm from './Components/ContactForm.jsx';
import Summary from './Components/Summary.jsx';

function App() {

  return (<>
      <header>
        <h1>GUNASEKAR V R</h1>
        <p><TypingEffect /></p><br/>
           <Toggle />
      </header>
      
      <Navbar/>
      <About/>
      <Summary/>
      <Projects/>
      <Education/>
      <ContactForm/>

  <footer>
    <Links/>
  </footer>

  </>);
}

export default App;
