import back from "../../assets/imgs/fondoServicioWeb.png"
import './serviceDesarrolloWeb.css'

const ServicesDesarrollo = () => {
    return (
        <>
        <main className="containerServicios">
            <section>
                <h1><strong>Servicios de Desarrollo Web</strong></h1>
                <hr />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis velit repudiandae quidem, nisi tempore explicabo eaque quam itaque, beatae nesciunt omnis corporis molestiae vitae nemo? Pariatur expedita nulla officiis quo?</p>
            </section>
            <picture>
                <img src={back} alt="Imagen de Desarrollo Web" />
            </picture>
        </main>
        
        <section className="information">
            <h2>Etapas en la creación de su Sitio Web</h2>
            <div className="etapa1">
                <section>
                    <h3>lorem</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere est, voluptatum reiciendis aspernatur doloribus expedita quisquam quibusdam.</p>
                </section>
                <picture>
                    <img src="" alt="Imagen de una etapa" />
                </picture>
            </div>
            
            <div className="etapa2">
                <section>
                    <h3>lorem</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere est, voluptatum reiciendis aspernatur doloribus expedita quisquam quibusdam.</p>
                </section>
                <picture>
                    <img src="" alt="Imagen de una etapa" />
                </picture>
            </div>
            
            <div className="etapa3">
                <section>
                    <h3>lorem</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere est, voluptatum reiciendis aspernatur doloribus expedita quisquam quibusdam.</p>
                </section>
                <picture>
                    <img src="" alt="Imagen de una etapa" />
                </picture>
            </div>
        </section>
        
        <section>
            <h2>Por qué elegirnos?</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </section>
        </>
    )
}

export default ServicesDesarrollo