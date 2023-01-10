import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import './App.css';
import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}>
     
     <Navbar />
     <Intro/>
     <AboutMe/>
    </div>
  );
}

export default App;
