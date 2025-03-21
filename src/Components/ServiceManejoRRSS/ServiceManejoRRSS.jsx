import { Link } from 'react-router-dom'
import imgRrss from "../../assets/imgs/imagen-redes-sociales.webp"
import imgRrss1 from "../../assets/imgs/rrssPlanBasico.jpg"
import imgRrss2 from "../../assets/imgs/rrssPlanEstandar.jpg"
import imgRrss3 from "../../assets/imgs/rrssPlanPro.jpg"
import imgPersonalizacion from "../../assets/imgs/personalizacion.png"
import './serviceManejoRRSS.css'

const ServicesMarketing = () => {
    return (
        <>
            <main className="containerServiciosWhite">
                <section>
                    <h1><strong>Manejamos tus Redes Sociales de principio a fin</strong></h1>
                    <hr />
                    <p>Creamos contenido, diseñamos publicaciones, planificamos estrategias, gestionamos anuncios y nos encargamos de la interacción con tu comunidad para hacer crecer tu marca. ¡Vos creás, nosotros lo hacemos brillar!</p>
                </section>
                <picture>
                    <img src={imgRrss} alt="Imagen de Desarrollo Web" />
                </picture>
            </main>

            <section className="information containerRRSS">
                <h2>Nuestros Planes</h2>
                <article className="">
                    <picture>
                        <img src={imgRrss1} alt="imgRrss1" />
                    </picture>
                    
                    <picture>
                        <img src={imgRrss2} alt="imgRrss2" />
                    </picture>
                    
                    <picture>
                        <img src={imgRrss3} alt="imgRrss3" />
                    </picture>
                </article>
            </section>

            <div className="information">
                <h2>¿Por qué Elegir Nuestros Servicios de Manejo de Redes Sociales?</h2>
            </div>
            <section className="porqueServicios">
                <div>
                    <img src={imgPersonalizacion} alt="Imagen de los beneficios de elegirnos" />
                    <section>
                        <h3>Experiencia</h3>
                        <p>Tenemos experiencia manejando y creando contenido de diferentes rubros en diferentes redes sociales.</p>
                    </section>
                </div>
                <div style={{ backgroundColor: "rgb(10, 10, 10)", color: "rgb(229, 229, 229)" }}>
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
                <div style={{ backgroundColor: "rgb(10, 10, 10)", color: "rgb(229, 229, 229)" }}>
                    <img src={imgPersonalizacion} alt="Imagen de los beneficios de elegirnos" />
                    <section>
                        <h3>100% Confiables</h3>
                        <p>Somos un equipo profesional, bueno y muy confiable.</p>
                    </section>
                </div>
            </section>

            <div className="listosContactanos">
                <h2><strong>¿Listo para llevar tu presencia online al siguiente nivel? <Link to={"/contacto"}>Contáctanos</Link> y trabajemos juntos en el manejo de tus Redes Sociales.</strong></h2>
            </div>
        </>
    )
}

export default ServicesMarketing