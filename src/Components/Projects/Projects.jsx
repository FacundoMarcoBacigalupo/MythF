import NbStyle from '../../assets/imgs/nbStyle.png'
import ToDo from '../../assets/imgs/ToDo.png'
import Papelera from '../../assets/imgs/Papelera.png'
import Blog from "../../assets/imgs/blog.jpg"
import "./proyects.css"

const Projects = () => {
    return (
        <>
            <main className="hero-container-project">
                <div className="hero-overlay-project">
                    <h1><strong>Nuestros Proyectos</strong></h1>
                </div>
            </main>
            
            <div className='containerProjectsDiv'>
                <h2 className='styleH2'><strong>Ejemplos de nuestros Servicios de Desarrollo</strong></h2>
                <section className='containerProyects'>
                    <article id='c1' className="card">
                        <header className="card__thumb">
                            <img src={NbStyle} alt='NbStyle' />
                        </header>
                        <div className="card__body">
                            <p className="card__title">Simulación completa de una Ecommerce de zapatilla</p>
                            <a href='https://ecommerce-nbstyle.netlify.app' target="_blank" rel="noreferrer" className="card__more">Ver más</a>
                        </div>
                    </article>
                    
                    <article id='c2' className="card">
                        <header className="card__thumb">
                            <img src={ToDo} alt='ToDo' />
                        </header>
                        <div className="card__body">
                            <p className="card__title">ToDo más una sección para buscar y descargar imágenes</p>
                            <a href='https://lista-de-tareas-todo.netlify.app' target="_blank" rel="noreferrer" className="card__more">Ver más</a>
                        </div>
                    </article>
                    
                    <article id='c3' className="card">
                        <header className="card__thumb">
                            <img src={Papelera} alt='Papelera' />
                        </header>
                        <div className="card__body">
                            <p className="card__title">Sitio web de un proveedor minorista de bolsas</p>
                            <a href='https://papelera-canuelas.netlify.app' target="_blank" rel="noreferrer" className="card__more">Ver más</a>
                        </div>
                    </article>
                    
                    <article id='c4' className="card">
                        <header className="card__thumb">
                            <img src={Blog} alt='Blog' />
                        </header>
                        <div className="card__body">
                            <p className="card__title">Blog sobre noticias generales del mundo IT</p>
                            <a href='https://it-noticias.netlify.app' target="_blank" rel="noreferrer" className="card__more">Ver más</a>
                        </div>
                    </article>
                </section>
            </div>
            
            {/* <div className='containerProjectsDiv'>
                <h2 className='styleH2'><strong>Ejemplos de nuestros Servicios de Marketing</strong></h2>
            </div> */}
        </>
    )
}

export default Projects