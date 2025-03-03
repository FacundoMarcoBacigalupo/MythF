import { Link } from 'react-router-dom'
import imgMain from "../../assets/imgs/ImagenHome.png"
import imgMain2 from "../../assets/imgs/ImagenHome2.png"
import rrss from "../../assets/imgs/manejoRedesSociales.png"
import web from "../../assets/imgs/SitioWeb.png"
import ads from "../../assets/imgs/googleAds.png"
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
                    <h3>Somos una Agencia Digital, te ayudamos con tus Redes Sociales, Sitio Web y te vendemos Software ya hecho.</h3>
                    <Link to={"/contacto"}>Contactanos</Link>
                </section>
            </main>
            
            <picture className='imageHome'>
                <img src={imgMain2} alt="Imagen MythF" />
            </picture>
            <section className='containerSecondHome'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis ex in iusto earum reiciendis consequatur, ipsam eveniet dolore doloremque officia labore enim dolor. Cupiditate saepe ipsa animi vero amet! Minus impedit quia itaque eligendi repudiandae? Minima natus laborum eaque ipsa commodi non nam odit reiciendis at sunt. Aspernatur numquam asperiores voluptatem nobis impedit ducimus voluptate voluptatum repudiandae et nihil. Ullam quia cupiditate hic dolores praesentium incidunt ratione amet facere ipsam mollitia suscipit, est nisi pariatur. Culpa illo possimus numquam, accusamus, neque ducimus assumenda sequi recusandae minus fugit soluta odio?</p>
            </section>
            
            <section className='containerThreeHome'>
                <h2>Nuestros Servicios</h2>
                <div>
                    <CardHome title={"Manejo de Redes Sociales"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis amet nostrum voluptate repudiandae voluptatum, earum esse voluptates neque, eum suscipit. Atque nisi ex quos modi commodi, inventore eos assumenda."} image={rrss} />
                    <CardHome title={"Desarrollo de Sitio Web"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis amet nostrum voluptate repudiandae voluptatum, earum esse voluptates neque, eum suscipit. Atque nisi ex quos modi commodi, inventore eos assumenda."} image={web} />
                    <CardHome title={"Google ADS"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis amet nostrum voluptate repudiandae voluptatum, earum esse voluptates neque, eum suscipit. Atque nisi ex quos modi commodi, inventore eos assumenda."} image={ads} />
                    <CardHome title={"Paquete de Software"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis amet nostrum voluptate repudiandae voluptatum, earum esse voluptates neque, eum suscipit. Atque nisi ex quos modi commodi, inventore eos assumenda."} image={software} />
                </div>
            </section>
        </>
    )
}

export default Home