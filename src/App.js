import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects'
import About from './components/About'
import Resume from './components/Resume'
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
