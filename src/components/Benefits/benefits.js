import React from 'react';

import './benefits.css'

export default function Benefits() {
    return (
        <section id="benefits">
            <div className="d-block d-md-none d-lg-none">
                <div className="container img"></div>
                <div className="text-s">
                    <h1>Beneficios del <br /> Coworking Clínico</h1>
                    <div className="divider"></div>
                    <h5>Desarrolle su actividad profesional con total confortabilidad y seguridad dentro de un ecosistema de profesionales afines al sector salud.
                </h5>
                    <div className="divider"></div>
                    <h5>Olvídese del alquiler tradicional de su espacio de trabajo y de sus costos fijos. Reserve nuestros consultorios u oficinas por el tiempo que necesite, por turnos, días, o meses ajustandose a sus necesidades.
                    </h5>
                </div>
            </div>
            <div className="d-none d-md-block">
                <div className="row">
                    <div className="col-md-7 col-lg-6 text">
                        <h1>Beneficios del <br /> Coworking Clínico</h1>
                        <div className="divider"></div>
                        <h5>Desarrolle su actividad profesional con total <br /> confortabilidad y seguridad dentro de un <br /> ecosistema de profesionales afines al sector <br /> salud.
                </h5>
                        <div className="divider"></div>
                        <h5>Olvídese del alquiler tradicional de su <br /> espacio de trabajo y de sus costos fijos. <br /> Reserve nuestros consultorios u oficinas por <br /> el tiempo que necesite, por turnos, días, <br /> o meses ajustandose a sus necesidades.
                    </h5>
                    </div>
                    <div className="col-md-5 col-lg-6">
                        <div className="container img"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}