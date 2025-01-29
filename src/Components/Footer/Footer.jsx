import whatsapp from "../../assets/imgs/whatsapp.png";
import whatsappDos from "../../assets/imgs/whatsappDos.png";
import ig from "../../assets/imgs/instagramFooter.png";
import fb from "../../assets/imgs/facebookFooter.png";
import './Footer.css';

const Footer = () => {
    let year = new Date();

    return (
        <footer>
            <section>
                <div className="containerFooter">
                    <div className="row">
                        <div className="col-md-3 col-lg-4 col-xl-3">
                            <h4 className="fw-bold">Redes Sociales</h4>
                            <hr className="hrStyles" />
                            <div className="RRSSFooter">
                                <img src={ig} alt="Instagram MythF" />
                                <a href="https://www.instagram.com/agenciamythf" target="_blank" rel="noreferrer">agenciamythf</a>
                            </div>
                            <div className="RRSSFooter">
                                <img src={fb} alt="Facebook MythF" />
                                <a href="https://www.facebook.com/agenciamythf" target="_blank" rel="noreferrer">agenciamythf</a>
                            </div>
                        </div>
                        
                        <div className="col-md-2 col-lg-2 col-xl-2">
                            <h4 className="fw-bold">Servicios</h4>
                            <hr className="hrStyles" />
                            <p>Manejo de Redes Sociales</p>
                            <p>Desarrollo de Sitio Web</p>
                            <p>Paquete de Software</p>
                            <p>Google ADS</p>
                        </div>
                        
                        <div className="col-md-4 col-lg-3 col-xl-3 styleFooterRRSS">
                            <h4 className="fw-bold">Contacto</h4>
                            <hr className="hrStyles" />
                            <div>
                                <a href="https://wa.me/+5401127398858" target="_blank" rel="noreferrer">
                                    <img className="imgStyle" src={whatsapp} alt="whatsapp" /> +54 11 2739-8858
                                </a>
                            </div>
                            <div>
                                <a href="https://wa.me/+5401122524921" target="_blank" rel="noreferrer">
                                    <img className="imgStyle" src={whatsappDos} alt="whatsapp" /> +54 9 11 2252-4921
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className="text-center p-3 colorUpDown">
                <p className="text-white">© {year.getFullYear()} Copyright: MythF</p>
            </div>
        </footer>
    );
};

export default Footer;