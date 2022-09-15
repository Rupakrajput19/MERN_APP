import "./App.css";
// import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer";
import { Routes, Route} from "react-router-dom";
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import Employeegrid from './Components/Employeegrid/Employeegrid';
import Studentgrid from './Components/Studentgrid/Studentgrid';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Notfound from './Components/Notfound/Notfound';

function App() {
  return (
    <>
    {/* <Header/> */}
    <Routes>
        <Route exact path="/" element={<Registration />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/Employeegrid" element={<Employeegrid grid_name="Employee's" />} />
        <Route exact path="/Studentgrid" element={<Studentgrid grid_name="Student's" />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
