import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./page/Login";
import Home from "./page/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    
  );
};

export default App;
