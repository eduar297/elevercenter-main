import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { ENDPOINT, LOCALTOKEN } from "../../config";
import HeaderMobile from './header-mobile.js';
import { ReactSVG } from 'react-svg'

import './header.css'

import logo from '../../assets/img/icons/logo.svg';
//import { ReactComponent as Logo } from '../../assets/img/elever2.3cb6b22d.svg';

export default function Header({ active }) {
    const [login, setLogin] = useState(false)

    useEffect(() => {
        axios.get(ENDPOINT + '/account/me', {
            headers: { Authorization: `bearer ${localStorage[LOCALTOKEN]}` }
        })
            .then(res => setLogin(true))
            .catch(err => console.log());
    }, []);

    const [showMobile, setShowMobile] = useState(false)
    const handleShow = () => {
        setShowMobile(!showMobile);
    }
    const header_mobile = showMobile ? <HeaderMobile /> : <></>
    return (
        <>
            {header_mobile}
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}><span><i className="fa fa-3x fa-user-circle private-area"></i></span></Link>
                    <span className="logo me-auto"><img width='240' src={logo}/></span>
                    <span onClick={handleShow}><i className="fa fa-3x fa-bars menu"></i></span>

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <Link to='/home'><li>Home</li></Link>
                            <Link to='/coworking'><li className={active === 'coworking' ? 'active' : ''}>Coworking Clínico</li></Link>
                            <Link to='/specialties'><li className={active === 'specialties' ? 'active' : ''}>Terapias y Expertos</li></Link>
                            <Link to='/blog'><li className={active ? 'active' : ''}>Blog</li></Link>
                            <Link to='/contact'><li className={active === 'contact' ? 'active' : ''}>Contacto</li></Link>
                        </ul>
                    </nav>
                    <Link style={{ color: '#279989' }} to={login ? '/logout' : '/login'}><span className="get-started-btn">{login ? "Salir" : "Área Privada"}  </span></Link>

                </div>
            </header>
        </>
    );
}