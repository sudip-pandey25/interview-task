import { useState } from "react";
import "./index.css";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Products />
        <Footer />
      </div>
    </>
  );
}

export default App;
