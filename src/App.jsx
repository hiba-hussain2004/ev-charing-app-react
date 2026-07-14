import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Addcar from "./components/Addcar";
import ViewCar from "./components/ViewCar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Addcar />} />
        <Route path="/view" element={<ViewCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;