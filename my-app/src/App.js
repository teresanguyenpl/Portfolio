import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";


// Components
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Cleverchat from "./components/Cleverchat";
import Shopfies from "./components/Shopfies"
import Form from "./components/Form"

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
        <Route element={<Cleverchat />} path="/projects/cleverchat" />
        <Route element={<Home />} path="/projects/portfolio" />
        <Route element={<Shopfies />} path="/projects/shopfies" />
        <Route element={<Form />} path="/projects/form" />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
