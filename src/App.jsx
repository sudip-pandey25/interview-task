import { useState } from "react";
import "./index.css";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <main className="mx-auto">
      <Products />
      <Footer />
    </main>
  );
}

export default App;
