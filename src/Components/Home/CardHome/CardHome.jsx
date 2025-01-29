/* eslint-disable react/prop-types */
import "./cardhome.css"

const CardHome = ({ title, description, image }) => {
    return (
        <>
        <article className="card">
            <div className="card__border"></div>
            <section className="card_title__container">
                <span className="card_title">{title}</span>
            </section>
            
            <p className="list_text">{description}</p>
            
            <section className="image__container">
                <img src={image} alt={title} />
            </section>
        </article>
        </>
    )
}

export default CardHome