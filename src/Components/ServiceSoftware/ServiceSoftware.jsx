import { Link } from "react-router-dom"
import back from "../../assets/imgs/fondoServicioWeb.png"
import imgPersonalizacion from "../../assets/imgs/personalizacion.png"
import './serviceSoftware.css'

const ServiceSoftware = () => {
    return (
        <>
        <main className="containerServiciosWhite containerServiceSoftware">
            <section>
                <h1><strong>Paquete de Software</strong></h1>
                <hr />
                <p>El Paquete de Software es un servicio que ofrece soluciones tecnológicas listas para usar, diseñadas para optimizar tareas y procesos de manera eficiente. Cada paquete incluye un software funcional junto con su código fuente y una guía de uso detallada, permitiendo a los clientes implementarlo de inmediato o personalizarlo según sus necesidades.
                    <br /><br />
                    <span>Planes de Compra</span>
                    <br />
                    🔹 Plan Básico <br />
                        Incluye: <br />
                        ✔️ Software listo para usar <br />
                        ✔️ Código fuente completo <br />
                        ✔️ PDF con instrucciones de uso
                        <br /><br />
                    🔹 Plan Premium <br />
                        Incluye: <br />
                        ✔️ Software listo para usar <br />
                        ✔️ Código fuente completo <br />
                        ✔️ PDF con instrucciones de uso <br />
                        ✨ Personalización del software (cambio de nombre, logo o ajustes menores)
                </p>
            </section>
            <picture>
                <img src={back} alt="Imagen de Desarrollo Web" />
            </picture>
        </main>
        
        <section className="information">
            <h2>Etapas en la creación de su Sitio Web</h2>
            <div className="containerServiciosBlack">
                <picture>
                    <img src={back} alt="Imagen de una etapa" />
                </picture>
                <section>
                    <h3></h3>
                    <hr />
                    <p></p>
                </section>
            </div>
            
            <div className="containerServiciosWhite">
                <section>
                    <h3></h3>
                    <hr />
                    <p></p>
                </section>
                <picture>
                    <img src={back} alt="Imagen de una etapa" />
                </picture>
            </div>
            
            <div className="containerServiciosBlack">
                <picture>
                    <img src={back} alt="Imagen de una etapa" />
                </picture>
                <section>
                    <h3></h3>
                    <hr />
                    <p></p>
                </section>
            </div>
        </section>
        
        <section className="porqueServicios">
            <h2>¿Por qué Elegir Nuestros Servicios de Desarrollo Web?</h2>
            <div>
                <img src={imgPersonalizacion} alt="Imagen de los beneficios de elegirnos" />
                <section>
                    <h3>Pronta Personalización</h3>
                    <p>Nuestros desarrolladores web experimentados proporcionan soluciones web de personalización sobre la marcha, ahorramos tiempo y entregamos un producto de calidad.</p>
                </section>
            </div>
            <div style={{backgroundColor:"rgb(10, 10, 10)", color:"rgb(229, 229, 229)"}}>
                <img src={imgPersonalizacion} alt="Imagen de los beneficios de elegirnos" />
                <section>
                    <h3>24/7</h3>
                    <p>Estamos disponibles en todo momento.</p>
                </section>
            </div>
            <div>
                <img src={imgPersonalizacion} alt="Imagen de los beneficios de elegirnos" />
                <section>
                    <h3>Precios Accesible</h3>
                    <p>Los mejores precios para ayudarte a potenciar tu marca/negocio.</p>
                </section>
            </div>
            <div style={{backgroundColor:"rgb(10, 10, 10)", color:"rgb(229, 229, 229)"}}>
                <img src={imgPersonalizacion} alt="Imagen de los beneficios de elegirnos" />
                <section>
                    <h3>100% Confiables</h3>
                    <p>Somos un equipo profesional, bueno y muy confiable.</p>
                </section>
            </div>
        </section>
        
        <div className="listosContactanos">
            <h2><strong>¿Listo para llevar tu presencia online al siguiente nivel? <Link to={"/contacto"}>Contáctanos</Link> y trabajemos juntos en la creación de tu sitio web ideal.</strong></h2>
        </div>
        </>
    )
}

export default ServiceSoftware