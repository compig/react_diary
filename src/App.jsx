import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";

import emotion1 from "./assets/emotion1"
import emotion2 from "./assets/emotion2"
import emotion3 from "./assets/emotion3"
import emotion4 from "./assets/emotion4"
import emotion5 from "./assets/emotion5"
function App() {
  return (
    <>
    <div>
      <img src={emotion1} />
      <img src={emotion2} />
      <img src={emotion3} />
      <img src={emotion4} />
      <img src={emotion5} />
    </div>
    <div>
    <Link to={"/"}>Home</Link>
    <Link to={"/new"}>New</Link>
    <Link to={"/diary"}>Diary</Link>
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary/>} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
