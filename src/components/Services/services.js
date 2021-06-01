import React from 'react';
import { Link } from "react-router-dom";

import './services.css'

import wifi from '../../assets/img/icons/wifi.svg';
import desk from '../../assets/img/icons/desk.svg';
import mask from '../../assets/img/icons/mask.svg';
import sofa from '../../assets/img/icons/sofa.svg';
import comer from '../../assets/img/icons/comer.svg';
import cofee from '../../assets/img/icons/coffe.svg';
import texh from '../../assets/img/icons/texh.svg';
import people from '../../assets/img/icons/people.svg';
import bell from '../../assets/img/icons/bell.svg';
import baby from '../../assets/img/icons/baby.svg';
import secure from '../../assets/img/icons/secure.svg';
import car from '../../assets/img/icons/car.svg';

export default function Services() {
    return (
        <section id="services">
        <div className="container">
            <div className="row">
                <div className="col-4 col-md-3 col-lg-2">
                    <img src={wifi}/>
                    <h5>Wifi</h5>
                </div>
                <div className="col-4 col-md-3 col-lg-2">
                    <img src={desk}/>
                    <h5>Recepción</h5>
                </div>
                <div className="col-4 col-md-3 col-lg-2">
                    <img src={sofa}/>
                    <h5>Espacio Relax</h5>
                </div>
                <div className="col-4 col-md-3 col-lg-2">
                    <img src={comer}/>
                    <h5>Comedor</h5>
                </div>
                <div className="col-4 col-md-3 col-lg-2">
                    <img src={cofee}/>
                    <h5>Café / Té / Agua</h5>
                </div>
                <div className="col-4 col-md-3 col-lg-2">
                    <img src={texh}/>
                    <h5>Alta tecnología</h5>
                </div>
                <div className="col-4 col-md-3 col-lg-2">
                    <img src={people}/>
                    <h5>Alarma</h5>
                </div>
                <div className="col-4 col-md-3 col-lg-2">
                    <img src={bell}/>
                    <h5>Comunidad</h5>
                </div>
                <div className="col-4 col-md-3 col-lg-2">
                    <img src={secure}/>
                    <h5>Seguridad</h5>
                </div>
                <div className="col-4 col-md-3 col-lg-2">
                    <img src={baby}/>
                    <h5>Sala Kids</h5>
                </div>
                <div className="col-4 col-md-3 col-lg-2">
                    <img src={car}/>
                    <h5>Estacionamiento</h5>
                </div>
            </div>
        </div>
    </section>
    );
}