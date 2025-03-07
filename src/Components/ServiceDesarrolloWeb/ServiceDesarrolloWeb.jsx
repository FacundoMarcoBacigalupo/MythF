import { Link } from "react-router-dom"
import back from "../../assets/imgs/fondoServicioWeb.png"
import imgPersonalizacion from "../../assets/imgs/personalizacion.png"
import './serviceDesarrolloWeb.css'

const ServicesDesarrollo = () => {
    return (
        <>
        <main className="containerServiciosWhite">
            <section>
                <h1><strong>Desarrollo Web a Medida para tu Negocio</strong></h1>
                <hr />
                <p>En el mundo digital actual, tener una presencia online efectiva es fundamental para cualquier empresa o emprendimiento. Nuestro servicio de desarrollo web te ofrece soluciones personalizadas, adaptadas a tus necesidades y objetivos. Desde el primer contacto hasta la entrega final, trabajamos contigo para crear un sitio web funcional, atractivo y optimizado para ofrecer la mejor experiencia a tus usuarios.</p>
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
                    <h3>1. Planificación y Estrategia</h3>
                    <hr />
                    <p>El primer paso en nuestro proceso de desarrollo web es comprender tu visión. Nos reunimos contigo para conocer a fondo tu negocio, objetivos y necesidades. Definimos la estructura del sitio, funcionalidades clave y diseño visual que mejor se adapte a tu identidad de marca. A través de un análisis detallado, creamos un plan estratégico que servirá como hoja de ruta para el desarrollo del proyecto.</p>
                </section>
            </div>
            
            <div className="containerServiciosWhite">
                <section>
                    <h3>2. Diseño y Desarrollo</h3>
                    <hr />
                    <p>Una vez establecido el plan, pasamos a la etapa de creación. Implementamos las tecnologías más avanzadas para garantizar un sitio web rápido, seguro y adaptable a cualquier dispositivo. Diseñamos una interfaz intuitiva y atractiva, asegurando que la experiencia del usuario sea óptima. Durante este proceso, mantenemos una comunicación constante contigo para que puedas ver avances y sugerir mejoras en tiempo real.</p>
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
                    <h3>3. Implementación y Lanzamiento</h3>
                    <hr />
                    <p>Cuando el sitio web está finalizado y probado, llega el momento de su lanzamiento. Nos encargamos de subirlo a un hosting confiable, configurarlo correctamente y asegurarnos de que todo funcione a la perfección. Si ya cuentas con un hosting propio, también podemos configurarlo y subir tu sitio en él.
                    <br /><br />
                    Es importante destacar que cualquier modificación o ajuste adicional solicitado después de la entrega del proyecto tendrá un costo adicional, ya que el servicio de desarrollo web no incluye mantenimiento continuo una vez finalizado el trabajo.</p>
                </section>
            </div>
        </section>
        
        <div className="information">
            <h2>¿Por qué Elegir Nuestros Servicios de Desarrollo Web?</h2>
        </div>
        
        <article className="porqueServicios">
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
        </article>
        
        <div className="listosContactanos">
            <h2><strong>¿Listo para llevar tu presencia online al siguiente nivel? <Link to={"/contacto"}>Contáctanos</Link> y trabajemos juntos en la creación de tu sitio web ideal.</strong></h2>
        </div>
        </>
    )
}

export default ServicesDesarrollo