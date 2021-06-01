import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './virtual.css'

export default function Virtual() {
    const [basic, setBasic] = useState(false);
    const _basic = basic ?
        <div>
            <br />
            <ul style={{ textAlign: "start" }}>
                <li>Domiciliación fiscal, comercial y social.</li>
                <li>Recepción de mensajería y paquetería.</li>
                <li>Aviso inmediato de mensajes urgentes y certificados.</li>
                <li>Aviso semanal de correspondencia ordinaria acumulada.</li>
                <li>Recepción y atención de visitas según instrucciones.</li>
                <li>Utilización de la dirección en tarjetas y página web.</li>
                <li>Descuento en alquiler de espacios.</li>
                <li>Invitación a eventos de la comunidad.</li>
            </ul>
        </div> : <></>

    const [premiun, setPremiun] = useState(false);
    const _premiun = premiun ?
        <div>
            <br />
            <ul style={{ textAlign: "start" }}>
                <li>Domiciliación comercial, fiscal y/o social .</li>
                <li>Recepción de mensajería y paquetería.</li>
                <li>Aviso inmediato de mensajes urgentes y certificados.</li>
                <li>Aviso semanal de correspondencia ordinaria acumulada.</li>
                <li>Recepción y atención de visitas siguiendo tus instrucciones.</li>
                <li>Atención telefónica en nombre de tu empresa en español e inglés.</li>
                <li>Envío de avisos por email con los datos de las llamadas recibidas.</li>
                <li>Un día al mes de uso del Open Space.</li>
                <li>Descuento en alquiler de espacios.</li>
                <li>Acceso a eventos y actividades de la comunidad.</li>
            </ul>
        </div> : <></>
    return (
        <section id="virtual">
            <h1>Oficina Virtual</h1>
            <h5>Ubique su empresa en una dirección prestigiosa. Le ofrecemos la gestión de<br />
            correspondencia y atención al cliente.
        </h5>
            <div className="container virtual">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="item">
                            <h4>Oficina Virtual Basic</h4>
                            <h1>$30</h1>
                            <h3>/ mes</h3>
                            <a onClick={() => { setBasic(!basic) }}>Ver servicios incluidos</a>
                            <br />
                            {_basic}
                            <button type="button" className="btn btn-get">Solicitar Información</button>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="item">
                            <h4>Oficina Virtual Premiun</h4>
                            <h1>$90</h1>
                            <h3>/ mes</h3>
                            <a onClick={() => { setPremiun(!premiun) }}>Ver servicios incluidos</a>
                            <br />
                            {_premiun}
                            <button type="button" className="btn btn-get">Solicitar Información</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}