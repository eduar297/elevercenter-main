import React from 'react';
import { Link } from "react-router-dom";

import './header.css'

export default function Header({ active }) {
    return (
        <section id="mobile" className="fixed-top">
            <div className="container">
                <div className="ul-mobile">
                    <ul>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/coworking'><li>Coworking Clínico</li></Link>
                        <Link to='/specialties'><li>Terapias y Expertos</li></Link>
                        <Link to='/blog'><li>Blog</li></Link>
                        <Link to='/contact'><li>Contacto</li></Link>
                    </ul>
                </div>
            </div>
        </section>
    );
}