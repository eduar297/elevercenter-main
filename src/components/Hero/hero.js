import React from 'react';
import { Link } from "react-router-dom";

import './hero.css'

export default function Hero() {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8">
                            <h1 className="hero-h1">Somos el Primer <br/> Coworking Clínico <br /> de Panamá</h1>
                            <Link to="/contact"><span className="btn-get-started">Solicita Información</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}