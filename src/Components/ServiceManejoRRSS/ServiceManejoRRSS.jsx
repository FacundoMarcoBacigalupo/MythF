import { Link } from 'react-router-dom'
import back from "../../assets/imgs/fondoServicioWeb.png"
import imgPersonalizacion from "../../assets/imgs/personalizacion.png"
import './serviceManejoRRSS.css'

const ServicesMarketing = () => {
    return (
        <>
        <main className="containerServiciosWhite">
            <section>
                <h1><strong>Manejamos tus redes sociales de principio a fin</strong></h1>
                <hr />
                <p>Creamos contenido, diseñamos publicaciones, planificamos estrategias, gestionamos anuncios y nos encargamos de la interacción con tu comunidad para hacer crecer tu marca. ¡Vos creás, nosotros lo hacemos brillar!</p>
            </section>
            <picture>
                <img src={back} alt="Imagen de Desarrollo Web" />
            </picture>
        </main>
        
        <section className="porqueServicios">
            <h2>¿Por qué Elegir Nuestros Servicios de Manejamos de Redes Sociales?</h2>
            <div>
                <img src={imgPersonalizacion} alt="Imagen de los beneficios de elegirnos" />
                <section>
                    <h3>Experiencia</h3>
                    <p>Tenemos experiencia manejando y creando contenido de diferentes rubros en diferentes redes sociales.</p>
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

export default ServicesMarketing