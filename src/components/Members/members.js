import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './members.css'

export default function Members() {
    const [elevate, setElevate] = useState(false);
    const _elevate = elevate ?
        <div>
            <br />
            <ul style={{ textAlign: "start" }}>
                <li>Horario acceso: de 8 am a 9 pm.</li>
                <li>Wifi alta velocidad.</li>
                <li>Consultorios totalmente equipados.</li>
                <li>Acceso a todas las áreas comunes: Zona relax,comedor/cafetería.</li>
                <li>Salas de espera para los clientes.</li>
                <li>Recepción visitas.</li>
                <li>Gestión paquetería y correo postal.</li>
                <li>Domiciliación empresa.</li>
                <li>Café té y agua de cortesía.</li>
                <li>Limpieza diaria.</li>
                <li>Descuentos en el alquiler de nuestros salones de capacitación.</li>

            </ul>
        </div> : <></>

    const [platinum, setPlatinum] = useState(false);
    const _platinum = platinum ?
        <div>
            <br />
            <ul style={{ textAlign: "start" }}>
                <li>Acceso 24/7.</li>
                <li>Se pueden registrar hasta 3 usuarios por
                Consultorio Platinum. El máximo es de 4
                personas registradas y la cuarta tiene un costo adicional de $150 al mes.</li>
                <li>Wifi alta velocidad.</li>
                <li>Consultorios totalmente equipados.</li>
                <li>Acceso a todas las áreas comunes: Zona relax, comedor/cafetería.</li>
                <li>Salas de espera para los clientes.</li>
                <li>Recepción visitas.</li>
                <li>Gestión paquetería y correo postal.</li>
                <li>Domiciliación empresa.</li>
                <li>Café té y agua de cortesía.</li>
                <li>Limpieza diaria.</li>
                <li>Descuentos en el alquiler de nuestros salones de capacitación</li>

            </ul>
        </div> : <></>

    return (
        <section id="members">
            <h1>Membresías y Consultorios Platinum</h1>
            <h5>
                Contrate nuestras membresías que le ofrecen un consultorio en función de sus necesidades. Además, tendrá acceso a
                <br/>servicios y beneficios exclusivos al formar parte de la comunidad de Èlever Center.
            </h5>
            <div className="container members">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="item">
                            <h4>Membresía ELÉVATE</h4>
                            <h1>$550</h1>
                            <h3>/ mes</h3>
                            <p>Acceso a los consultorios Silver y Gold <br /> (3 turnos a la semana) <i className="fa fa-info"></i></p>
                            <a onClick={() => { setElevate(!elevate) }}>Ver servicios incluidos</a>
                            <br />
                            {_elevate}
                            <button type="button" className="btn btn-get">Solicitar Información</button>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="item">
                            <h4>Consultorios PLATINUM</h4>
                            <h1>$1100</h1>
                            <h3>/ mes</h3>
                            <p>Consultorio de uso exclusivo <br /> Plazo mínimo a contratar 3 meses. <i className="fa fa-info"></i></p>
                            <a onClick={() => { setPlatinum(!platinum) }}>Ver servicios incluidos</a>
                            <br />
                            {_platinum}
                            <button type="button" className="btn btn-get">Solicitar Información</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}