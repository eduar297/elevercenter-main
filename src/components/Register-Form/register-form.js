import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { ENDPOINT, LOCALTOKEN } from "../../config";

import './register-form.css'

export default function Register() {
    const [login, setLogin] = useState("")
    const [role, setRole] = useState('');

    const [specialty, setSpecialty] = useState('Psicólogo');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    const [msg, setMsg] = useState(false);


    const handleClick = () => {
        if (password != cpassword)
            return

        const data = {
            name: name,
            email: email,
            phone: phone,
            address: address,
            city: city,
            province: province,
            password: password,
            role: role,
            specialty: specialty
        };
        axios.post(ENDPOINT + "/account/register", data)
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem(LOCALTOKEN, res.data.token)
                    setLogin('Client')
                }
                else
                    setMsg(true)
            })
            .catch(err => console.log(err));
    }

    const _select = role == "Professional" ?
        <div className="col-12 select">
            <select onChange={(e) => setSpecialty(e.target.value)} className="control custom-select custom-select-lg form-control form-control-lg">
                <option value="Psicólogo">Psicólogo</option>
                <option value="Psiquiatra">Psiquiatra</option>
                <option value="Nutricionista">Nutricionista</option>
                <option value="Fonoaudiólogo">Fonoaudiólogo</option>
                <option value="Quiropráctico">Quiropráctico</option>
                <option value="Terapista">Terapista Clínico</option>
                <option value="Consejería">Consejería Académica</option>
            </select>
        </div> :
        <></>

    const _msg = msg ?
        <p>Su solicitud fue enviada con éxito, sus datos seran verificados por la empresa y
        se le enviara respuesta a su email. Gracias.
    </p> : <></>

    if (login == "Client")
        return <Redirect to={'/specialties'} />
    else
        return (
            <section id="register">
                <div className="container d-none d-md-block">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="form">
                                    <h2>Crea una cuenta en Èlever Center</h2>
                                    <p>¿Ya estás registrado en Èlever? <Link to='/login'><a>Entrar</a></Link></p>



                                    <div className="row">
                                        <div className={`col-6 radio left ${role == "Professional" ? "active" : ""}`}>
                                            <div className="row label">
                                                <div className="col-4">
                                                    <input required onClick={() => setRole("Professional")} className="radio-input required" type="radio" name="optradio" />
                                                </div>
                                                <div className="col-8">Soy profesional</div>
                                            </div>
                                        </div>
                                        <div className={`col-6 radio rigth ${role == "Client" ? "active" : ""}`}>
                                            <div className="row label">
                                                <div className="col-4">
                                                    <input required onClick={() => setRole("Client")} className="radio-input required" type="radio" name="optradio" />
                                                </div>
                                                <div className="col-8">Soy paciente</div>
                                            </div>
                                        </div>

                                        {_select}
                                    </div>

                                    <input required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nombre y Apellidos" />
                                    <br />
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <input required value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <input required value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Teléfono" />
                                        </div>
                                    </div>
                                    <input required value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Dirección" />
                                    <br />
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <input required value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Ciudad" />
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <input required value={province} onChange={(e) => setProvince(e.target.value)} type="text" placeholder="Provincia" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Contraseña" />
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <input required value={cpassword} onChange={(e) => setCPassword(e.target.value)} type="password" placeholder="Confirmar contraseña" />
                                        </div>
                                    </div>
                                    <button onClick={handleClick}>Registrarme</button>
                                    <br />
                                    {_msg}
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
                <div className="container d-block d-md-none d-lg-none">
                    <div className="form">
                            <h2>Crea una cuenta en Èlever Center</h2>
                            <p>¿Ya estás registrado en Èlever? <Link to='/login'><a>Entra</a></Link></p>

                            <div className="row">
                                <div className={`col-6 radio left ${role == "Professional" ? "active" : ""}`}>
                                    <div className="row">
                                        <div className="col-4">
                                            <input required onClick={() => setRole("Professional")} className="radio-input required" type="radio" name="optradio" />
                                        </div>
                                        <div className="col-8 label">Soy profesional</div>
                                    </div>
                                </div>
                                <div className={`col-6 radio left ${role == "Client" ? "active" : ""}`}>
                                    <div className="row">
                                        <div className="col-4">
                                            <input required onClick={() => setRole("Client")} className="radio-input required" type="radio" name="optradio" />
                                        </div>
                                        <div className="col-8 label">Soy paciente</div>
                                    </div>
                                </div>
                            </div>

                            <input required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nombre y Apellidos" />
                            <br />
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <input required value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                                </div>
                                <div className="col-md-6 col-12">
                                    <input required value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Teléfono" />
                                </div>
                            </div>
                            <input required value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Dirección" />
                            <br />
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <input required value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Ciudad" />
                                </div>
                                <div className="col-md-6 col-12">
                                    <input required value={province} onChange={(e) => setProvince(e.target.value)} type="text" placeholder="Provincia" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Contraseña" />
                                </div>
                                <div className="col-md-6 col-12">
                                    <input required value={cpassword} onChange={(e) => setCPassword(e.target.value)} type="password" placeholder="Confirmar contraseña" />
                                </div>
                            </div>
                            <button onClick={handleClick}>Registrarme</button>
                            <br />
                            {_msg}
                    </div>
                </div>

            </section>
        );
}