import React from 'react';

import './footer.css'

import footer from '../../assets/img/footer.png'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="container  d-none d-md-block">
                <div className="row">
                    <div className="col-4">
                        <img src={footer} width="70%" />
                    </div>
                    <div className="emails col-4">
                        <p>hola@elevercenter.com</p>
                        <p>+507 309 3784</p>
                    </div>
                    <div className="icons col-4">
                        <p>
                            <a href="https://www.facebook.com/EleverCenter"><i className="fa fa-2x fa-facebook fc"></i> </a>
                            <a href="https://www.instagram.com/elevercenter/"><i className="fa fa-2x fa-instagram in"></i></a>
                            <a href="https://www.linkedin.com/company/%C3%A8lever-center-coworking"><i className="fa fa-2x fa-linkedin li"></i></a>
                        </p>
                    </div>
                </div>
                <hr />
                <div className="down row">
                    <div className="left col-6">
                        <p>© 2021 Todos los derechos reservados</p>
                    </div>
                    <div className="rigth col-6">
                        <p>Powered by Arden & Price</p>
                    </div>
                </div>
            </div>
            <div className="container d-block d-md-none d-lg-none small">
                <div className="emails">
                    <h2>hola@elevercenter.com</h2>
                    <br />
                    <h2>Teléfono 1</h2>
                </div>
                <div className="icons">
                    <p>
                        <a href="https://www.facebook.com/EleverCenter"><i className="fa fa-4x fa-facebook fc"></i></a>
                        <a href="https://www.instagram.com/elevercenter/"><i className="fa fa-4x fa-instagram in"></i></a>
                        <a href="https://www.linkedin.com/company/%C3%A8lever-center-coworking"><i className="fa fa-4x fa-linkedin li"></i></a>
                    </p>
                </div>
                <hr />
                <div className="down">
                    <h3>© 2021 Todos los derechos reservados</h3>
                    <br />
                    <h2>Powered by Arden & Price</h2>
                </div>
            </div>
        </footer>
    );
}