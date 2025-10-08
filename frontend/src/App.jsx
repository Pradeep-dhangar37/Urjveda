import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { Home } from "lucide-react";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
