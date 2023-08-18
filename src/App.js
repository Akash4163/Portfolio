import About from "./components/About";
import Experiance from "./components/Technologies";
import Home from "./components/Home";
 import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
import Technologies from "./components/Technologies"


function App() {
  return (
    <div >
       <NavBar/> 
      <Home/>
      <SocialLinks/>
      <About></About>
      <Portfolio></Portfolio>
      
      <Technologies></Technologies>
      <Contact></Contact>
    </div>
  );
}

export default App;
