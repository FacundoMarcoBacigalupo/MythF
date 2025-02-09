import back from "../../assets/imgs/fondoServicioWeb.png"
import imgPersonalizacion from "../../assets/imgs/personalizacion.png"
import './serviceDesarrolloWeb.css'

const ServicesDesarrollo = () => {
    return (
        <>
        <main className="containerServiciosWhite">
            <section>
                <h1><strong>Servicio Desarrollo Web</strong></h1>
                <hr />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis velit repudiandae quidem, nisi tempore explicabo eaque quam itaque, beatae nesciunt omnis corporis molestiae vitae nemo? Pariatur expedita nulla officiis quo?</p>
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
                    <h3>lorem</h3>
                    <hr />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere est, voluptatum reiciendis aspernatur doloribus expedita quisquam quibusdam.</p>
                </section>
            </div>
            
            <div className="containerServiciosWhite" style={{height:"55vh"}}>
                <section>
                    <h3>lorem</h3>
                    <hr />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere est, voluptatum reiciendis aspernatur doloribus expedita quisquam quibusdam.</p>
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
                    <h3>lorem</h3>
                    <hr />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere est, voluptatum reiciendis aspernatur doloribus expedita quisquam quibusdam.</p>
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
            <div>
                <img src={imgPersonalizacion} alt="Imagen de los beneficios de elegirnos" />
                <section>
                    <h3>Pronta Personalización</h3>
                    <p>Nuestros desarrolladores web experimentados proporcionan soluciones web de personalización sobre la marcha, ahorramos tiempo y entregamos un producto de calidad.</p>
                </section>
            </div>
            <div>
                <img src={imgPersonalizacion} alt="Imagen de los beneficios de elegirnos" />
                <section>
                    <h3>Pronta Personalización</h3>
                    <p>Nuestros desarrolladores web experimentados proporcionan soluciones web de personalización sobre la marcha, ahorramos tiempo y entregamos un producto de calidad.</p>
                </section>
            </div>
            <div>
                <img src={imgPersonalizacion} alt="Imagen de los beneficios de elegirnos" />
                <section>
                    <h3>Pronta Personalización</h3>
                    <p>Nuestros desarrolladores web experimentados proporcionan soluciones web de personalización sobre la marcha, ahorramos tiempo y entregamos un producto de calidad.</p>
                </section>
            </div>
        </section>
        </>
    )
}

export default ServicesDesarrollo