import { Route, Routes } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import BookingPage from './pages/BookingPage'
import Home from "./pages/Home"
import Confirmation from "./pages/Confirmation";
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking-confirmation" element={<Confirmation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
