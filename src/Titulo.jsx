import React from "react";
import datosViajes from "./data.js";
import Tours from "./Tours.jsx";

let viajesDestacados = 0;

datosViajes.map((viaje) => {
    if (viaje.destacado) {
        viajesDestacados++;
    }
})

const Titulo = () => {
    return (
        <main>
            <section>
                <div className="title">
                    <h2>nuestros tours</h2>
                    <div className="underline"></div>
                    <h3>tenemos {viajesDestacados} tours destacados</h3>
                </div>
                <div>
                {datosViajes.map((viaje) => {
                    return <Tours key={viaje.id} name={viaje.name} image={viaje.image} price={viaje.price} info={viaje.info} destacado={viaje.destacado} /> 
                })}
                </div>         
            </section>
        </main>
    );
}

export default Titulo;