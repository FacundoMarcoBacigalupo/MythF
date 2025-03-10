import whatsapp from "../../assets/imgs/whatsappGreen.png";
// import whatsappDos from "../../assets/imgs/whatsappDosGreen.png";
import './contact.css'

const Contact = () => {
    return (
        <>
            <main className="hero-container">
                <div className="hero-overlay">
                    <h1><strong>¡Contáctanos!</strong></h1>
                </div>
            </main>
            
            <section className="textContacto">
                <h2>¿Tenés alguna consulta o querés saber más sobre nuestros servicios?</h2>
                <p>¡Estamos para ayudarte! Mándanos un mensaje y juntos llevamos tu negocio al próximo nivel.</p>
            </section>
            
            <section className='containerDudas'>
                <h2>¿Tenes dudas?</h2>
                <h3>Envianos un mensaje por WhatsApp</h3>
                {/* <div>
                    <img src={whatsappDos} alt="Imagen WhatsApp" />
                    <a href="https://wa.me/+5401122524921" target="_blank" rel="noreferrer">+54 9 11 2252-4921</a>
                </div>
                <p>O</p> */}
                <div>
                    <img src={whatsapp} alt="Imagen WhatsAp" />
                    <a href="https://wa.me/+5401127398858" target="_blank" rel="noreferrer">+54 11 2739-8858</a>
                </div>
            </section>
        </>
    )
}

export default Contact