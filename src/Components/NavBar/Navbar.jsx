import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import home from "../../assets/imgs/Inicio.png";
import projects from "../../assets/imgs/Proyectos.png";
import serMarketing from "../../assets/imgs/ServiciosMarketing.png";
import serSoftware from "../../assets/imgs/ServiciosSoftware.png";
import contacto from "../../assets/imgs/Contacto.png";
import logo from "../../assets/imgs/logo.png"
import "./navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Función para manejar la apertura/cierre del menú
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle("menu-open", !isOpen);
    };

    // Función para cerrar el menú cuando se hace clic en un enlace y hacer scroll arriba
    const closeMenu = () => {
        setIsOpen(false);
        document.body.classList.remove("menu-open");
        window.scrollTo(0, 0); // Lleva la página al inicio
    };

    // Cerrar el menú si la ruta cambia
    useEffect(() => {
        closeMenu();
    }, [location]);

    return (
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
            <div className="container nav-container">
                {/* Menú Hamburguesa */}
                <div className="hamburger-lines" onClick={toggleMenu}>
                    <span className={`line line1 ${isOpen ? "open" : ""}`}></span>
                    <span className={`line line2 ${isOpen ? "open" : ""}`}></span>
                    <span className={`line line3 ${isOpen ? "open" : ""}`}></span>
                </div>
                
                {/* Logo */}
                <div className="logo">
                    <Link to={"/"}>
                        <img src={logo} alt="Logo de MythF" />
                    </Link>
                </div>

                {/* Menú de navegación */}
                <div className={`menu-items ${isOpen ? "open" : ""}`}>
                    <li className="styles-menu-items">
                        <Link to={"/"} onClick={closeMenu}>
                            <div>
                                <img src={home} alt="Home Icon" />
                                <span>Inicio</span>
                            </div>
                        </Link>
                    </li>
                    <li className="styles-menu-items">
                        <Link to={"/proyectos"} onClick={closeMenu}>
                            <div>
                                <img src={projects} alt="Proyectos Icon" />
                                <span>Proyectos</span>
                            </div>
                        </Link>
                    </li>
                    <li className="styles-menu-items">
                        <Link to={"/servicio-manejor-redes-sociales"} onClick={closeMenu}>
                            <div>
                                <img src={serMarketing} alt="Servicios Marketing Icon" />
                                <span>Manejo Redes Sociales</span>
                            </div>
                        </Link>
                    </li>
                    <li className="styles-menu-items">
                        <Link to={"/servicio-desarrollo-web"} onClick={closeMenu}>
                            <div>
                                <img src={serSoftware} alt="Servicios Software Icon" />
                                <span>Desarrollo Web</span>
                            </div>
                        </Link>
                    </li>
                    <li className="styles-menu-items">
                        <Link to={"/servicio-google-ads"} onClick={closeMenu}>
                            <div>
                                <img src={serSoftware} alt="Servicios Software Icon" />
                                <span>Google Ads</span>
                            </div>
                        </Link>
                    </li>
                    <li className="styles-menu-items">
                        <Link to={"/servicio-paquete-software"} onClick={closeMenu}>
                            <div>
                                <img src={serSoftware} alt="Servicios Software Icon" />
                                <span>Paquete de software</span>
                            </div>
                        </Link>
                    </li>
                    <li className="styles-menu-items">
                        <Link to={"/contacto"} onClick={closeMenu}>
                            <div>
                                <img src={contacto} alt="Contacto Icon" />
                                <span>Contactanos</span>
                            </div>
                        </Link>
                    </li>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;