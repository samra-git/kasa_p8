import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from "./logo.svg";
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import Accommodation from "./pages/Accommodation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent/:id" element={<Accommodation />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
