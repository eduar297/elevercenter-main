import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { ENDPOINT, LOCALTOKEN } from "../../config";

import './login-form.css'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login, setLogin] = useState('');

    const [msg, setMsg] = useState(false);

    const handleClick = () => {

        const data = {
            email: email,
            password: password
        };
        if (!data.email || !data.password)
            setMsg(true);
        axios.post(ENDPOINT + "/account/login", data)
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem(LOCALTOKEN, res.data.token)
                    if (res.data.account.role == "Admin")
                        setLogin("Admin")
                    else if (res.data.account.role == "Client")
                        setLogin("Client")
                    else
                        setLogin("Professional")
                }
                else
                    setMsg(true);

            })
            .catch(err => console.log(err));
    }

    const _msg = msg ?
        <p style={{ color: 'red', textAlign: 'center' }}>Credenciales Incorrectas</p> : <></>

    if (login == "Professional")
        return <Redirect to={'/coworking'} />
    else if (login == "Client")
        return <Redirect to={'/specialties'} />
    else if (login == "Admin")
        return <Redirect to={'/admin'} />
    else
        return (
            <section id="login">
                <div className="container d-none d-md-block">
                    <div className="row">
                        <div className="col-lg-2 col-0"></div>
                        <div className="col-lg-8 col-12">
                            <div className="form">
                                <h2>¡Bienvenido! <br /> Conectate a Èlever Center</h2>
                                <p>¿Aún no eres miembro? <Link to='/register'><a>Inscríbete</a></Link></p>
                                <input required value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                                <br />
                                <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Contraseña" />
                                <br />
                                <a>He olvidado mi contraseña</a>
                                <br />
                                <button onClick={handleClick}>Acceder</button>
                                <br />
                                {_msg}
                            </div>
                        </div>
                        <div className="col-lg-2 col-0"></div>
                    </div>
                </div>

                <div className="container d-block d-md-none d-lg-none">
                    <div className="form">
                        <h2>¡Bienvenido! <br /> Conectate a Èlever Center</h2>
                        <p>¿Aún no eres miembro? <Link to='/register'><a>Inscribete</a></Link></p>
                        <input required value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                        <br />
                        <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Contraseña" />
                        <br />
                        <a>He olvidado mo contraseña</a>
                        <br />
                        <button onClick={handleClick}>Acceder</button>
                        <br />
                        {_msg}
                    </div>
                </div>
            </section>
        );
}