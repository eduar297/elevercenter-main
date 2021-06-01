import React from 'react';

import './contacts.css'


export default function contacts() {
    return (
        <section id="icons" className="d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="icon">
                            <div className="row">
                                <div className="col-4">
                                    <i className="fa fa-2x fa-mobile"></i>
                                </div>
                                <div className="col-8">
                                    <h5>TELÉFONO</h5>
                                    <p>+507 308 3784</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="icon">
                            <div className="row">
                                <div className="col-4">
                                    <i className="fa fa-2x fa-envelope-o equal"></i>
                                </div>
                                <div className="col-8">
                                    <h5>EMAIL</h5>
                                    <p>hola@elevercenter.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="icon">
                            <div className="row">
                                <div className="col-4">
                                    <i className="fa fa-2x fa-clock-o equal"></i>
                                </div>
                                <div className="col-8">
                                    <h5>HORARIOS</h5>
                                    <p>Lunes a Viernes de 8:00 a.m. a 9:00 p.m.</p>
                                    <p>Sábado de 9:00 a.m. a 1:00 p.m.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="icon">
                            <div className="row">
                                <div className="col-4">
                                    <i className="fa fa-2x fa-map-marker"></i>
                                </div>
                                <div className="col-8">
                                    <h5>UBICACIÓN</h5>
                                    <p>Avenida de la Rotonda, Prime Time Tower Piso 23, Costa del Este.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="icon">
                            <div className="row">
                                <div className="col-4">
                                    <i className="fa fa-2x fa-car equal"></i>
                                </div>
                                <div className="col-8">
                                    <h5>ESTACIONAMIENTO</h5>
                                    <p>Estacionamientos de visitas disponibles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}