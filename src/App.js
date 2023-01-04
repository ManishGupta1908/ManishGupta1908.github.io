import Navbar from "./components/Navbar/Navbar"
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
     Manish Portfoloi
     <Navbar />
    </div>
  );
}

export default App;
