import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Home from "../Components/Home/Home.jsx";
import Projects from "../Components/Projects/Projects.jsx";
import ServicesManejoRRSS from "../Components/ServiceManejoRRSS/ServiceManejoRRSS.jsx";
import ServicesDesarrolloWeb from "../Components/ServiceDesarrolloWeb/ServiceDesarrolloWeb.jsx";
import ServiceGoogleAds from "../Components/ServiceGoogleAds/ServiceGoogleAds.jsx";
import ServiceSoftware from "../Components/ServiceSoftware/ServiceSoftware.jsx";
import Contact from "../Components/Contact/Contact.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="containerSitioWeb">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/proyectos" element={<Projects />} />
                    <Route exact path="/servicio-manejor-redes-sociales" element={<ServicesManejoRRSS />} />
                    <Route exact path="/servicio-desarrollo-web" element={<ServicesDesarrolloWeb />} />
                    <Route exact path="/servicio-google-ads" element={<ServiceGoogleAds />} />
                    <Route exact path="/servicio-paquete-software" element={<ServiceSoftware />} />
                    <Route exact path="/contacto" element={<Contact />} />
                    <Route path="*" element={<h1>Error 404</h1>} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default Router