import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Button from "./components/Button"
import Header from "./components/Header"

function App() {
  return (
    <>
    <Header title={"Header"}
      leftChild={<Button text={"left"}/>}
      rightChild={<Button text={"right"}/>}
    />
    <Button 
    text={"123"}
    type={"DEFAULT"}
    onClick={()=> {
    }}
    />
    <Button 
    text={"123"}
    type={"POSITIVE"}
    onClick={()=> {
    }}
    />
    <Button 
    text={"123"}
    type={"NEGATIVE"}
    onClick={()=> {
    }}
    />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
