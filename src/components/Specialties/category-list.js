import React from 'react';
import { Link } from "react-router-dom";

import './specialties.css'

import Category from './category.js';

export default function Specialties({ setStep, setSpecialty }) {
    const handleClick = (specialty) => {
        setSpecialty(specialty)
        setStep(1)
    }
    return (
        <section id="specialties">
            <div className="container">
                <h1> Nuestros Especialistas </h1>
                <h5> Pida cita con el especialista que mejor se ajuste a sus necesidades. En Èlever Center le < br /> atenderemos con el máximo confort, privacidad y profesionalidad.
            </h5>
            </div>
            <div className="list">
                <div className="container">
                    <div className="cats row">
                        <div className="col-12 col-md-4 col-lg-3">
                            <div onClick={() => handleClick('Psicólogo')} className="item-first">
                                <h4 className="cat-text">Psicólogos</h4>
                                <div className="icon">
                                    <i className="fa fa-2x fa-plus-circle"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div onClick={() => handleClick('Psiquiatra')} className="item">
                                <h4 className="cat-text">Psiquiatras</h4>
                                <div className="icon">
                                    <i className="fa fa-2x fa-plus-circle"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div onClick={() => handleClick('Nutricionista')} className="item">
                                <h4 className="cat-text">Nutricionistas</h4>
                                <div className="icon">
                                    <i className="fa fa-2x fa-plus-circle"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div onClick={() => handleClick('Fonoaudiólogo')} className="item">
                                <h4 className="cat-text">Fonoaudiólogos</h4>
                                <div className="icon">
                                    <i className="fa fa-2x fa-plus-circle"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div onClick={() => handleClick('Quiropráctico')} className="item-first">
                                <h4 className="cat-text">Quiroprácticos</h4>
                                <div className="icon">
                                    <i className="fa fa-2x fa-plus-circle"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div onClick={() => handleClick('Terapista')} className="item sm">
                                <h4 className="cat-text">Terapistas Clínicos</h4>
                                <div className="icon">
                                    <i className="fa fa-2x fa-plus-circle"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div onClick={() => handleClick('Salud')} className="item lg">
                                <h4 className="cat-text-max">Salud Integral y Organizacional</h4>
                                <h4 className="cat-text-min">Salud Integral <br/> y Organizacional</h4>
                                <div className="icon">
                                    <i className="fa fa-2x fa-plus-circle"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div onClick={() => handleClick('Consejería')} className="item md">
                                <h4 className="cat-text">Consejería Académica</h4>
                                <div className="icon">
                                    <i className="fa fa-2x fa-plus-circle"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div onClick={() => handleClick('Otro')} className="item-first md">
                                <h4 className="cat-text">Otras Especialidades</h4>
                                <div className="icon">
                                    <i className="fa fa-2x fa-plus-circle"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}