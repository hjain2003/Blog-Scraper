import './App.css';
import About from './components/About/About';
import './components/About/About.css'
import Latest from './components/Latest/Latest';
import './components/Latest/Latest.css';
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css'

function App() {
  return (
    <>
    <Navbar/>
    <About/>
    <Latest/>
    </>
  );
}

export default App;
