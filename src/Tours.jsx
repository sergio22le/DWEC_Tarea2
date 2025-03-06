import React from "react";

const Tours = ({name, image, price, info, destacado}) => {
    return (
        <article className={`single-tour${destacado ? " destacado" : ""}`}>
            <img src={image === "" ? "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" : image}  alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">{price === "" ? "A consultar" : `${price}€`}</h4>
                </div>
                <p>{info}</p>
            </footer>
        </article>        
    );
}

export default Tours;