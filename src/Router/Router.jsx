import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Navbar from '../Components/Navbar/Navbar.jsx';
import Footer from "../Components/Footer/Footer.jsx"
import Home from '../Components/Home/Home.jsx';
import Projects from '../Components/Projects/Projects.jsx';
import ServicesMarketing from '../Components/ServicesMarketing/ServicesMarketing.jsx';
import ServicesDesarrollo from '../Components/ServicesServicesDesarrollo/ServicesDesarrollo.jsx';
import Contact from '../Components/Contact/Contact.jsx';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div id="main">
                <div id="main-content">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/proyectos" element={<Projects />} />
                    <Route exact path="/servicios-marketing" element={<ServicesMarketing />} />
                    <Route exact path="/servicios-desarrollo" element={<ServicesDesarrollo />} />
                    <Route exact path="/contacto" element={<Contact />} />
                    <Route path="*" element={<h1>Error 404</h1>} />
                </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default Router