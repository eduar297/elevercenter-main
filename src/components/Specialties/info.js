import React from 'react';
import { Link } from "react-router-dom";

import './specialties.css'

import _avatar from '../../assets/img/avatar info.PNG'

export default function Info({ name, specialty, avatar, setStep }) {
    return (
        <>
            <section id="info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-2 col-6">
                            <img src={_avatar}/>
                        </div>
                        <div className="col-md-4 col-lg-6 col-6 name">
                            <h1>Teaodoro Méndez</h1>
                            <h5>Psicólogo</h5>
                        </div>
                        <div className="icons col-md-4 col-12">
                            <p><i className="fa fa-2x fa-facebook fc"></i> <i className="fa fa-2x fa-instagram in"></i> <i className="fa fa-2x fa-linkedin li"></i></p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="description">
                <div className="container">
                    <div className="text">
                        <h4>Descripción</h4>
                        <br />
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloribus numquam facilis? Et aut quas non repudiandae voluptatem reiciendis reprehenderit eaque alias sequi at ad molestiae quos vitae, similique delectus.</h5>
                        <br />
                        <h4>Tratamientos</h4>
                        <br />
                        <ul>
                            <li>Atención Psiquiatrica</li>
                            <li>Intervención de crisis</li>
                            <li>Psicoeducación</li>
                            <li>Psicofarmacología</li>
                            <li>Psiquiatría de adultos</li>
                            <li>Consulta</li>
                            <li>Visita a domicilio</li>
                            <li>Certificado de buena salud mental para licencia, trámites notariales y trámites académicos </li>
                        </ul>
                        <br />
                        <h4>Horario de citas</h4>
                        <br />
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <div className="row">
                                    <div className="col-6">
                                        <h5>Lunes - Viernes</h5>
                                    </div>
                                    <div className="col-6">
                                        <h5>8:00 - 5:00</h5>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-6">
                                        <h5>Sabados</h5>
                                    </div>
                                    <div className="col-6">
                                        <h5>10:00 - 4:00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <button type="button" className="btn btn-get">Solicita Cita</button>
                    </div>
                </div>
            </section>
        </>
    );
}