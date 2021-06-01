import React from 'react';
import { Link } from "react-router-dom";

import './rent.css'

export default function Rent() {
    return (
        <section id="rent">
            <div className="container d-none d-lg-block">
                <h1>Alquiler consultorios por horas o días</h1>
                <h5>Le ofrecemos toda la flexibilidad que necesita para ejercer su profesión, reserve por
                <br/>turnos, días o meses el espacio que necesite para sus terapias, formaciones o eventos.
                </h5>
                <div className="table">
                    <div className="thead">
                        <div className="row">
                            <div className="col-4">
                                <p>Tipo de alquiler</p>
                            </div>
                            <div className="col-2">
                                <p>Consultorio Silver</p>
                            </div>
                            <div className="col-2">
                                <p>Consultorio Gold</p>
                            </div>
                        </div>
                    </div>
                    <div className="body">
                        <div className="row">
                            <div className="col-4">
                                <p>1 día</p>
                            </div>
                            <div className="col-2">
                                <p>$150</p>
                            </div>
                            <div className="col-2">
                                <p>$170</p>
                            </div>
                            <div className="col-2">
                                <Link className="btn-rent">Reservar</Link>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="body">
                        <div className="row">
                            <div className="col-4">
                                <p>Turno Mañana 8 - 12 (4h)</p>
                            </div>
                            <div className="col-2">
                                <p>$50</p>
                            </div>
                            <div className="col-2">
                                <p>$60</p>
                            </div>
                            <div className="col-2">
                                <Link className="btn-rent">Reservar</Link>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="body">
                        <div className="row">
                            <div className="col-4">
                                <p>Turno Tarde 12:30 - 4:30 (4h)</p>
                            </div>
                            <div className="col-2">
                                <p>$70</p>
                            </div>
                            <div className="col-2">
                                <p>$80</p>
                            </div>
                            <div className="col-2">
                                <Link className="btn-rent">Reservar</Link>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="body">
                        <div className="row down">
                            <div className="col-4">
                                <p>Turno Noche 5 - 9 (4h)</p>
                            </div>
                            <div className="col-2">
                                <p>$70</p>
                            </div>
                            <div className="col-2">
                                <p>$80</p>
                            </div>
                            <div className="col-2">
                                <Link className="btn-rent">Reservar</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container d-block d-lg-none">
                <h1>Alquiler consultorios por horas o días</h1>
                <h5>Le ofrecemos toda la flexibilidad que necesita para ejercer su profesión, reserve por
                turnos, días o meses el espacio que necesite para sus terapias, formaciones o eventos.
                </h5>
                <div className="mobile-table row">
                    <div className="col-12 mobile-header">
                        <h3>Alquiler 1 día</h3>
                    </div>
                    <div className="col-8 left">
                        <h3>Consultorio Silver</h3>
                    </div>
                    <div className="col-4 right">
                        <h3>$150</h3>
                    </div>
                    <div className="col-8 left">
                        <h3>Consultorio Gold</h3>
                    </div>
                    <div className="col-4 right">
                        <h3>$170</h3>
                    </div>
                    <Link className="mobile-btn">Reservar</Link>
                </div>

                <div className="mobile-table row">
                    <div className="col-12 mobile-header">
                        <h3>Turno mañana 8 - 12 (4h)</h3>
                    </div>
                    <div className="col-8 left">
                        <h3>Consultorio Silver</h3>
                    </div>
                    <div className="col-4 right">
                        <h3>$50</h3>
                    </div>
                    <div className="col-8 left">
                        <h3>Consultorio Gold</h3>
                    </div>
                    <div className="col-4 right">
                        <h3>$60</h3>
                    </div>
                    <Link className="mobile-btn">Reservar</Link>
                </div>

                <div className="mobile-table row">
                    <div className="col-12 mobile-header">
                        <h3>Turno tarde 12.30 - 4.30 (4H)</h3>
                    </div>
                    <div className="col-8 left">
                        <h3>Consultorio Silver</h3>
                    </div>
                    <div className="col-4 right">
                        <h3>$70</h3>
                    </div>
                    <div className="col-8 left">
                        <h3>Consultorio Gold</h3>
                    </div>
                    <div className="col-4 right">
                        <h3>$80</h3>
                    </div>
                    <Link className="mobile-btn">Reservar</Link>
                </div>

                <div className="mobile-table row">
                    <div className="col-12 mobile-header">
                        <h3>Turno noche 5 - 9 4(h)</h3>
                    </div>
                    <div className="col-8 left">
                        <h3>Consultorio Silver</h3>
                    </div>
                    <div className="col-4 right">
                        <h3>$70</h3>
                    </div>
                    <div className="col-8 left">
                        <h3>Consultorio Gold</h3>
                    </div>
                    <div className="col-4 right">
                        <h3>$80</h3>
                    </div>
                    <Link className="mobile-btn">Reservar</Link>
                </div>
                <div className="divider"></div>
            </div>
        </section >
    );
}