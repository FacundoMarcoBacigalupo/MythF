import { BrowserRouter, Routes, Route } from "react-router-dom" 
// import Navbar from "../components/Navbar/Navbar.jsx";
// import Footer from "../components/Footer/Footer.jsx";
import Home from "../components/Home/Home.jsx";
import Projects from "../components/Projects/Projects.jsx";
import ServicesMarketing from "../components/ServicesMarketing/ServicesMarketing.jsx";
import ServicesDesarrollo from "../components/ServicesDesarrollo/ServicesDesarrollo.jsx";
import Contact from "../components/Contact/Contact.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            {/* <Navbar /> */}
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
                {/* <Footer /> */}
            </div>
        </BrowserRouter>
    )
}

export default Router