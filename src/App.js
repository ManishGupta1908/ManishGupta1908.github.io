import Navbar from "./Components/Navbar";
import './App.css';
import Banner from "./Components/Banner";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Project";
import Footer from "./Components/Footer";
import Calender from "./Components/Calendar";
import Stats from "./Components/Stats";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <About/>
     <Skills/>
     <Calender/>
     <Stats/>
     <Projects/>
     <Footer/>
    </div>
  );
}

export default App;
