import { Link } from "react-router-dom"
import home from "../../assets/imgs/Inicio.png"
import projects from "../../assets/imgs/Proyectos.png"
import serMarketing from "../../assets/imgs/ServiciosMarketing.png"
import serSoftware from "../../assets/imgs/ServiciosSoftware.png"
import contacto from "../../assets/imgs/Contacto.png"
import "./navbar.css"

const NavBar = () => {
    return (
        <nav id="navbar">
            <ul className="navbar-items flexbox-col">
                <li className="navbar-logo flexbox-left">
                    <div className="navbar-item-inner flexbox">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 1438.88 1819.54">
                        <polygon points="925.79 318.48 830.56 0 183.51 1384.12 510.41 1178.46 925.79 318.48"/>
                        <polygon points="1438.88 1663.28 1126.35 948.08 111.98 1586.26 0 1819.54 1020.91 1250.57 1123.78 1471.02 783.64 1663.28 1438.88 1663.28"/>
                        </svg>
                    </div>
                </li>
                
                <li className="navbar-item flexbox-left">
                    <Link to={"/"} className="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">
                            <img src={home} alt="Home Icon" />
                        </div>
                        <span className="link-text">Inicio</span>
                    </Link>
                </li>
                <li className="navbar-item flexbox-left">
                    <Link to={"/proyectos"} className="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">
                            <img src={projects} alt="Proyectos Icon" />
                        </div>
                        <span className="link-text">Proyectos</span>
                    </Link>
                </li>
                <li className="navbar-item flexbox-left">
                    <Link to={"/servicios-marketing"} className="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">
                            <img src={serMarketing} alt="Servicios Marketing Icon" />
                        </div>
                        <span className="link-text">Servicios Marketing</span>
                    </Link>
                </li>
                <li className="navbar-item flexbox-left">
                    <Link to={"/servicios-desarrollo"} className="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">
                            <img src={serSoftware} alt="Servicios Software Icon" />
                        </div>
                        <span className="link-text">Servicios Desarrollo</span>
                    </Link>
                </li>
                <li className="navbar-item flexbox-left">
                    <Link to={"/contacto"} className="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">
                            <img src={contacto} alt="Contacto Icon" />
                        </div>
                        <span className="link-text">Contactanos</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar