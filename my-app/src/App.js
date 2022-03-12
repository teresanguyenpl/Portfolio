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
        <Route element={<Home />} exact path="/" />
        <Route element={<About />} path="/About" />
        <Route element={<Contact />} path="/Contact" />
        <Route element={<Projects />} exact path="/Projects" />
        <Route element={<Cleverchat />} path="/Projects/Cleverchat" />
        <Route element={<Shopfies />} path="/Projects/Shopfies" />
        <Route element={<Form />} path="/Projects/Form" />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
