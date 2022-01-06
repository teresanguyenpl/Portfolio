import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";


// Components
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle>
      </GlobalStyle>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Projects />} path="/projects" />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
