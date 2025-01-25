import logo from './logo.svg';
import './App.css';
import Header from './includes/Header/Header';
import Footer from './includes/Footer/Footer';
import Menu from './includes/Menu/Menu';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import { Routes, Route } from "react-router";

function App() {

  let compName = "ARDSoft It Solutions";

  let getemailId = (email) =>{
    console.log(email);
  }

  return (
    <div className="d-flex">
      <Menu />
      <div className="content flex-grow-1">
          <Header companyName={compName} fname="Amit" />
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact emailGet={getemailId} />} />
            </Routes>
          <Footer />
      </div>
  </div>
  );
}

export default App;
