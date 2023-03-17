// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Elements/Navbar";
import Home from "./Elements/Home";
import About from "./Elements/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./Elements/Alert";
import Login from "./Elements/Login";
import SignUp from "./Elements/SignUp";
function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert message={"Hello This Is Message"}/>
          <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<SignUp/>} />
          </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
