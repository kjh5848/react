import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import About from "./page/About";
import Home from "./page/Home";
import Info from "./page/Info";
import List from "./page/List";

import Login from "./page/Login";
import Logout from "./page/Logout";
import LoginComplete from "./page/LoginComplete";
import LogoutComplete from "./page/LogoutComplete";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/list" element={<List />} /> 
        <Route path="/login" element={<Login />}/>
        <Route path="/loginComplete" element={<LoginComplete />} /> 
        <Route path="/logout" element={<Logout />} />
        <Route path="/logoutComplete" element={<LogoutComplete />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;