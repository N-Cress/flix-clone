import {  Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />}>
  
        </Route>
      </Routes>
    </>
  );
}

export default App;
