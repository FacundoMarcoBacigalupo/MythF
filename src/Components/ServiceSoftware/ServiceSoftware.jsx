import { Link } from "react-router-dom"
import imgSoftware from "../../assets/imgs/imagen-software.jpg"
import imgPersonalizacion from "../../assets/imgs/personalizacion.png"
import imgToDo from "../../assets/imgs/imagen-ToDo.jpg"
// import imgPdf from "../../assets/imgs/imagen-pdf.png"
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
                <img src={imgSoftware} alt="Imagen de Desarrollo Web" />
            </picture>
        </main>
        
        <section className="information">
            <h2>Nuestros Paquetes de Software</h2>
            <div className="containerServiciosBlack">
                <picture>
                    <img src={imgToDo} alt="Imagen de una etapa" />
                </picture>
                <section>
                    <h3>Lista de Tareas Web</h3>
                    <hr />
                    <p>Este Paquete de Software es un ToDo List en la Web, lo que permite que una vez ejectuado ya se tiene una lista de tareas totalmente personal y localmente.</p>
                </section>
            </div>
            
            {/* <div className="containerServiciosWhite">
                <section>
                    <h3>Generador de Reportes en PDF</h3>
                    <hr />
                    <p>Este Paquete de Software permite convertir archivos de texto (.txt, .docx) en documentos PDF de manera rápida y sencilla. Ideal para generar reportes profesionales sin necesidad de herramientas en línea.</p>
                </section>
                <picture>
                    <img src={imgPdf} alt="Imagen de una etapa" />
                </picture>
            </div> */}
        </section>
        
        <div className="information">
            <h2>¿Por qué Elegir Nuestro Paquete de Software?</h2>
        </div>
        <section className="porqueServicios">
            <div>
                <img src={imgPersonalizacion} alt="Imagen de los beneficios de elegirnos" />
                <section>
                    <h3>Software ya hecho</h3>
                    <p>Los paquetes de software son programas ya hechos y funcionales que buscan resolver un problema en contreto.</p>
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