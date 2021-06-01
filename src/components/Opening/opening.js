import React from 'react';

import './opening.css'

export default function Opening() {
    return (
        <section id="opening">
            <h1>Agende su cita para visitar nuestro espacio</h1>
            <div className="container">
                <div className="row">
                    <div className="d-block d-md-none d-lg-none col-12">
                        <h5>750 m&sup2; con tecnología punta</h5><br />
                        <h5>Consultorios de diferentes tamaños</h5><br />
                        <h5>Oficinas privadas</h5><br />
                        <h5>Open workspace</h5><br />
                        <h5>Estacionamientos privados</h5><br />
                        <h5>Salas para capacitaciones y eventos</h5><br />
                        <hr/>
                        <br/>
                    </div>
                    <div className="d-block d-md-none d-lg-none col-12">
                        <h5>Salas de espera privadas</h5><br />
                        <h5>Comedor, cocina y coffee corner</h5><br />
                        <h5>Zona relax exclusiva para coworkers</h5><br />
                        <h5>Sala kids</h5><br />
                        <h5>Ambientes insonorizados</h5><br />
                    </div>

                    <div className="d-none d-md-block col-md-6 vertical-line-left">
                        <h5>750 m&sup2; con tecnología punta</h5><br />
                        <h5>Consultorios de diferentes tamaños</h5><br />
                        <h5>Oficinas privadas</h5><br />
                        <h5>Open workspace</h5><br />
                        <h5>Estacionamientos privados</h5><br />
                        <h5>Salas para capacitaciones y eventos</h5><br />
                    </div>
                    <div className="d-none d-md-block col-md-6 vertical-line-rigth">
                        <h5>Salas de espera privadas</h5><br />
                        <h5>Comedor, cocina y coffee corner</h5><br />
                        <h5>Zona relax exclusiva para coworkers</h5><br />
                        <h5>Sala kids</h5><br />
                        <h5>Ambientes insonorizados</h5><br />
                    </div>
                </div>
            </div>
        </section>
    );
}