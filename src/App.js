import "./App.css";
import { Hero } from "./Components/Hero";
import { Body } from "./Components/Body";
import { Footer } from "./Components/Footer";
import EfficientCursor from "react-efficient-cursor";
import { Cursor } from "./Components/Cursor";

function App() {
  return (
    <div className="App">
      <Hero />
      <Body />
      <Footer />
      <EfficientCursor>
        <Cursor />
      </EfficientCursor>
    </div>
  );
}

export default App;
