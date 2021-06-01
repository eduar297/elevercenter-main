import React from 'react';

import './about.css'

export default function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="top"></div>
                <div className="text">
                    <div className="title">
                        <h1>¿Para quién es Èlever Center?</h1>
                    </div>
                </div>
                <div className="categories d-block d-md-none d-lg-none">
                    <div className="btn-group">
                        <button type="button" className="btn btn-category-s"><b>Psicólogos</b></button>
                        <button type="button" className="btn btn-category-s"><b>Fonoaudiólogos</b></button>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-category-s"><b>Nutricionistas</b></button>
                        <button type="button" className="btn btn-category-s"><b>Psiquiatras</b></button>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-category-s"><b>Quiroprácticos</b></button>
                        <button type="button" className="btn btn-category-s"><b>Terapistas Clínicos</b></button>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-category-s"><b>Salud Integral y Organizacional</b></button>
                        <button type="button" className="btn btn-category-s"><b>Consejería Académica</b></button>
                    </div>
                </div>
                <div className="categories d-none d-md-block">
                    <div className="btn-group">
                        <button type="button" className="btn btn-category"><b>Psicólogos</b></button>
                        <button type="button" className="btn btn-category"><b>Psiquiatras</b></button>
                        <button type="button" className="btn btn-category"><b>Nutricionistas</b></button>
                        <button type="button" className="btn btn-category"><b>Fonoaudiólogos</b></button>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-category"><b>Quiroprácticos</b></button>
                        <button type="button" className="btn btn-category"><b>Terapistas Clínicos</b></button>
                        <button type="button" className="btn btn-category"><b>Salud Integral y Organizacional</b></button>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-category"><b>Consejería Académica</b></button>
                        <button type="button" className="btn btn-category"><b>Otros Profesionales</b></button>
                    </div>
                </div>
            </div>
        </section >
    );
}