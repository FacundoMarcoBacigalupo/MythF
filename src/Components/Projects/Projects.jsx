import MFL from '../../assets/imgs/MFL-Agencia-Marketing-Digital.png'
import NbStyle from '../../assets/imgs/nbStyle.png'
import ToDo from '../../assets/imgs/ToDo.png'
import Papelera from '../../assets/imgs/Papelera.png'
import Blog from "../../assets/imgs/blog.jpg"
import hackathon from "../../assets/imgs/hackathon.jpg"
import "./proyects.css"

const Projects = () => {
    return (
        <div id='proyects'>
            <h2 className='styleH2'><strong>Ejemplos de nuestros Servicios de Desarrollo</strong></h2>
            
            <section className='containerProyects'>
                <article id='c1' className="card">
                    <img className="card__thumb" src={MFL} alt='MFL' />
                    <div className="card__body">
                        <p className="card__title">Sitio web de una agencia de marketing digital</p>
                        <a href='https://agencia-mfl.netlify.app' target="_blank" rel="noreferrer" className="card__more">Ver más</a>
                    </div>
                </article>
                
                <article id='c2' className="card">
                    <header className="card__thumb">
                        <img src={NbStyle} alt='NbStyle' />
                    </header>
                    <div className="card__body">
                        <p className="card__title">Simulación completa de una Ecommerce de zapatilla</p>
                        <a href='https://ecommerce-nbstyle.netlify.app' target="_blank" rel="noreferrer" className="card__more">Ver más</a>
                    </div>
                </article>
                
                <article id='c3' className="card">
                    <header className="card__thumb">
                        <img src={ToDo} alt='ToDo' />
                    </header>
                    <div className="card__body">
                        <p className="card__title">ToDo, lista de tareas más una sección para buscar y descargar imágenes</p>
                        <a href='https://lista-de-tareas-todo.netlify.app' target="_blank" rel="noreferrer" className="card__more">Ver más</a>
                    </div>
                </article>
                
                <article id='c4' className="card">
                    <header className="card__thumb">
                        <img src={hackathon} alt='hackathon' />
                    </header>
                    <div className="card__body">
                        <p className="card__title">Hackaton de No Country sobre Justina.io</p>
                        <a href='https://hackaton-no-country.vercel.app' target="_blank" rel="noreferrer" className="card__more">Ver más</a>
                    </div>
                </article>
                
                <article id='c5' className="card">
                    <header className="card__thumb">
                        <img src={Papelera} alt='Papelera' />
                    </header>
                    <div className="card__body">
                        <p className="card__title">Sitio web de un proveedor minorista de bolsas</p>
                        <a href='https://papelera-canuelas.netlify.app' target="_blank" rel="noreferrer" className="card__more">Ver más</a>
                    </div>
                </article>
                
                <article id='c6' className="card">
                    <header className="card__thumb">
                        <img src={Blog} alt='Blog' />
                    </header>
                    <div className="card__body">
                        <p className="card__title">Blog sobre noticias generales del mundo IT</p>
                        <a href='https://it-noticias.netlify.app' target="_blank" rel="noreferrer" className="card__more">Ver más</a>
                    </div>
                </article>
            </section>
            
            <h2 className='styleH2'><strong>Ejemplos de nuestros Servicios de Marketing</strong></h2>
            
        </div>
    )
}

export default Projects