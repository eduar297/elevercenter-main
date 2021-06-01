import React from 'react';
import { Link } from "react-router-dom";

import './events.css'

import event1 from '../../assets/img/event1.jpg'
import event2 from '../../assets/img/event2.jpg'

export default function Events() {
    return (
        <section id="events">
            <div className="container">
                <h1>Alquiler de salas para eventos y<br /> capacitaciones </h1>
                <h5>Disponemos de dos salas completamente equipadas para que organice formaciones,
                    <br /> charlas, workshops, presentaciones o eventos de networking para su empresa o
                    <br /> clientes. Le ayudamos a personalizar su evento.
                </h5>
                <div className="row">
                    <div className="col-12 col-lg-6 left">
                        <img src={event1} width="509px" height="353" />
                        <div className="info">
                            <h2>Sala de reuniones y capacitaciones</h2>
                            <h5>Disponemos de una sala para reuniones y capacitaciones disponible para nuestros Miembros y clientes eventuales. <br /> <br /></h5>
                            <button type="button" className="btn btn-get">Solicitar Información</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 right">
                        <img src={event2} width="509px" height="353" />
                        <div className="info">
                            <h2>Espacio de eventos</h2>
                            <h5>Amplio salón para eventos o presentaciones, con montaje <br /> personalizado, cocina para catering<br /> y baño privado dentro del salón.
                </h5>
                            <button type="button" className="btn btn-get">Solicitar Información</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}