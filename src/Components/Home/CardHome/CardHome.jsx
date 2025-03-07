/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import "./cardhome.css"

const CardHome = ({ title, description, image, url }) => {
    return (
        <Link to={url}>
        <article className="cardHome">
            <div className="cardHome__border"></div>
            <section className="cardHome_title__container">
                <span className="cardHome_title">{title}</span> 
            </section>
            
            <p className="list_text">{description}</p>
            
            <section className="image__container">
                <img src={image} alt={title} />
            </section>
        </article>
        </Link>
    )
}

export default CardHome