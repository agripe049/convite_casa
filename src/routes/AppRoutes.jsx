import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home"
import SlideBar from "../components/SlideBar/SlideBar";
import ConfirmePresenca from "../pages/ConfirmePresenca/ConfirmePresenca";
import NossaHistoria from "../pages/NossaHistoria/NossaHistoria";
import Presentes from "../pages/Presentes/Presentes";

function AppRoutes() {
  return (
    <div>
        <Router>
            <SlideBar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/confirme-presenca" element={<ConfirmePresenca />}/>
                <Route path="/presentes" element={<Presentes />}/>
                <Route path="/nossa-historia" element={<NossaHistoria />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default AppRoutes;