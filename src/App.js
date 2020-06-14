import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" style={{ width: "100%", overflowX: "hidden" }}>
      <Header />
      <About />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
