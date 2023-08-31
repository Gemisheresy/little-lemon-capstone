import { Route, Routes } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home"
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
