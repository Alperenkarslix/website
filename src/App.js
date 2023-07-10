import './App.css';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/about"/>
          <Route path="/contact" />
        </Routes>
        <Footer />
      </Router>
      
    </>

  );
}

export default App;
