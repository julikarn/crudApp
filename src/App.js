import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Create from "./component/Create";
import Read from "./component/Read";
import Update from "./component/Update";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
        
          <Route exact path="/" element={<Create/>} />
          <Route exact path="/read" element={<Read/>} />
          <Route exact path="/edit/:id" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
