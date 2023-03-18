// import logo from './logo.svg';
import { useState } from "react";
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
  const [alert, setAlert] = useState(null);
  const [user, setUser]=useState("")

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar user={user} setUser={setUser}/>
          <Alert alert={alert} />
          <div className="container">
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login showAlert={showAlert} setUser={setUser}/>} />
            <Route exact path="/signup" element={<SignUp showAlert={showAlert}/>} />
          </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
