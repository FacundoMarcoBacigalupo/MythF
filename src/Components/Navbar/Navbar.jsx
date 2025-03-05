import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/imgs/logoSinFondo.png"
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
                        <p>Inicio</p>
                        </Link>
                    </li>
                    <li className="styles-menu-items">
                        <Link to={"/proyectos"} onClick={closeMenu}>
                        <p>Proyectos</p>
                        </Link>
                    </li>
                    <li className="styles-menu-items">
                        <Link to={"/servicio-manejor-redes-sociales"} onClick={closeMenu}>
                        <p>Manejo Redes Sociales</p>
                        </Link>
                    </li>
                    <li className="styles-menu-items">
                        <Link to={"/servicio-desarrollo-web"} onClick={closeMenu}>
                        <p>Desarrollo Web</p>
                        </Link>
                    </li>
                    <li className="styles-menu-items">
                        <Link to={"/servicio-paquete-software"} onClick={closeMenu}>
                        <p>Paquete de software</p>
                        </Link>
                    </li>
                    <li className="styles-menu-items">
                        <Link to={"/contacto"} onClick={closeMenu}>
                        <p>Contactanos</p>
                        </Link>
                    </li>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;