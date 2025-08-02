import Toggle from './Components/Toggle.jsx';
import TypingEffect from './Components/TypingEffect.jsx';
import Projects from './Components/Projects.jsx';
import Education from './Components/Education.jsx';
import Navbar from './Components/Navbar.jsx';
import About from './Components/About.jsx';
import Contacts from './Components/Contact.jsx';
import Links from './Components/Links.jsx';

function App() {

  return (<>
      <header>
        <h1>GUNASEKAR V R</h1>
        <p><TypingEffect /></p>
           <Toggle />
      </header>

      <Navbar/>
      <About/>
      <Projects/>
      <Education/>
      <Contacts/>

  <footer>
    <Links/>
  </footer>

  </>);
}

export default App;
