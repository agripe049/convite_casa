import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home"
import SlideBar from "../components/SlideBar/SlideBar";
import ConfirmePresenca from "../pages/ConfirmePresenca/ConfirmePresenca";
import NossaHistoria from "../pages/NossaHistoria/NossaHistoria";
import Presentes from "../pages/Presentes/Presentes";
import Footer from "../components/Footer/Footer";
import ListaConfirmados from "../pages/ListaConfirmados/ListaConfirmados";

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
                <Route path="/presenca-confirmada-864vbd34kjf43v" element={<ListaConfirmados /> }/>
            </Routes>
            <Footer />
        </Router>
    </div>
  )
}

export default AppRoutes;