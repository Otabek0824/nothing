import { useState } from "react";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";

const App = () => {
  const [nav, setNav] = useState("home");
  console.log(nav);
  return (
    <div className="container">
      <h1 className="text-red-500">App</h1>
      <div className="flex gap-4">
        <button
          className={`${nav === "home" ? "text-red-500" : ""}`}
          onClick={() => setNav("home")}
        >
          home
        </button>
        <button
          className={`${nav === "about" ? "text-red-500" : ""}`}
          onClick={() => setNav("about")}
        >
          about 
        </button>
        <button
          className={`${nav === "contact" ? "text-red-500" : ""}`}
          onClick={() => setNav("contact")}
        >
          contact
        </button>
        <button
          className={`${nav === "portfolio" ? "text-red-500" : ""}`}
          onClick={() => setNav("portfolio")}
        >
          portfolio
        </button>
      </div>
      <div>
        {nav === "about" && <About />}
        {nav === "home" && <Home />}
        {nav === "contact" && <Contact />}
        {nav === "portfolio" && <Portfolio />}
      </div>
    </div>
  );
};
export default App;
