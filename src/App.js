import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Rezervation from "./pages/Rezervation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Galery from "./pages/Galery";
import Takeaway from "./pages/Takeaway";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="menu" element={<Menu/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="galery" element={<Galery/>}/>
        <Route path="takeaway" element={<Takeaway/>}/>
        <Route path="rezervation" element={<Rezervation/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
