import { Route, Routes } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import Reservations from './pages/BookingPage'
import Home from "./pages/Home"
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes >
        <Route path="/r" element={<Home />} />
        <Route path="/" element={<Reservations />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
