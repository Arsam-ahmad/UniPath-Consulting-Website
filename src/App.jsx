import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToHash from "./components/ScrollToHash.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
