import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Sermons from "./components/Sermons";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Give from "./components/Give";
import { ThemeProvider } from "./ThemeContext";
import EventPage from "./components/VBS2024";
import Kainos from "./components/kainos-seminar";

const App = () => (
  <ThemeProvider>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/give" element={<Give />} />
          <Route path="/events/BCCVBS2024" element={<EventPage />} />
          <Route path="/events/kainos-seminar" element={<Kainos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </ThemeProvider>
);

export default App;
