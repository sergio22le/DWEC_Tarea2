import React from "react";
import datosViajes from "./data.js";
import Tours from "./Tours.jsx";

let viajesDestacados = 0;

datosViajes.map((viaje)=>{
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
                    return <Tours {...viaje} />
                })}
                </div>         
            </section>
        </main>
    );
}

export default Titulo;