import { Link } from 'react-router-dom'
import imgMain from "../../assets/imgs/ImagenHome.png"
import imgMain2 from "../../assets/imgs/ImagenHome2.png"
import rrss from "../../assets/imgs/manejoRedesSociales.png"
import web from "../../assets/imgs/SitioWeb.png"
import software from "../../assets/imgs/software.png"
import CardHome from './CardHome/CardHome'
import './home.css'

const Home = () => {
    return (
        <>
            <picture className='imageHome'>
                <img src={imgMain} alt="Logo MythF" />
            </picture>
            <main className='containerMainHome'>
                <section>
                    <h2>Somos una Agencia Digital que potencia tu presencia online. Gestionamos tus Redes Sociales, diseñamos tu Sitio Web y ofrecemos Software listo para usar, para que lleves tu negocio al siguiente nivel</h2>
                    <Link to={"/contacto"}>Contactanos</Link>
                </section>
            </main>
            
            <picture className='imageHome'>
                <img src={imgMain2} alt="Imagen MythF" />
            </picture>
            <section className='containerSecondHome'>
                <p>Elegirnos significa contar con un equipo dedicado a entender tus necesidades y objetivos. Nos diferenciamos por nuestra creatividad, compromiso y la capacidad de ofrecer soluciones digitales completas, desde la gestión de redes sociales hasta el desarrollo de software. Trabajamos de manera personalizada, asegurándonos de que cada estrategia esté alineada con lo que realmente importa para tu negocio. ¡Tu éxito es nuestra misión!</p>
            </section>
            
            <section className='containerThreeHome'>
                <h2>Nuestros Servicios</h2>
                <div>
                    <CardHome title={"Manejo de Redes Sociales"} description={"Manejamos tus redes sociales de principio a fin: creamos contenido, diseñamos publicaciones, planificamos estrategias, gestionamos anuncios y nos encargamos de la interacción con tu comunidad para hacer crecer tu marca. ¡Vos creás, nosotros lo hacemos brillar!"} image={rrss} url={"/servicio-manejor-redes-sociales"} />
                    
                    <CardHome title={"Desarrollo de Sitio Web"} description={"Tener una presencia online efectiva es fundamental para cualquier empresa o emprendimiento. Nuestro servicio de desarrollo web te ofrece soluciones personalizadas, adaptadas a tus necesidades y objetivos. Desde el primer contacto hasta la entrega fina."} image={web} url={"/servicio-desarrollo-web"} />
                    
                    <CardHome title={"Paquete de Software"} description={"Te ofrecemos soluciones digitales a medida con software ya desarrollado. Agiliza tu negocio con herramientas eficientes, seguras y fáciles de implementar. ¡Todo listo para que empieces a crecer hoy!"} image={software} url={"/servicio-paquete-software"} />
                </div>
            </section>
        </>
    )
}

export default Home