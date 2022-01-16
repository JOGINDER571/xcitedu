import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Corporation from "./Components/Corporation";
import Communities from "./Components/Communities";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corporation" element={<Corporation/>}/>
          <Route path="/communities" element={<Communities/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
