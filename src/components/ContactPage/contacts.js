import React, { useState } from 'react';
import ReCaptcha from '../../components/ReCaptcha/ReCaptcha.js'

import axios from 'axios';

import './contacts.css'

import map from '../../assets/img/contacts.png'

export default function Contacts() {
    const [IAmHuman, setIAmHuman] = useState(null);
    const recaptchaRef = React.createRef();
    const reset = () => {
        recaptchaRef.current.reset()
        setIAmHuman(null)
    }

    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSend = e => {
        e.preventDefault()
        reset()
        sendMail(e)
    }

    const sendMail = e => {

        const data = {
            name,
            email,
            message
        }

        const _data = {
            service_id: "service_lkbb73v",
            template_id: "template_u1x3415",
            user_id: "user_su9vZkQbiCen0tmGukLul",
            template_params: {
                name,
                email,
                message
            }
        }


        if (data.name == "" || data.email == "" || data.message == "")
            return
        else {
            axios.post('https://api.emailjs.com/api/v1.0/email/send', _data)
            .then(res => {
                setName("")
                setEmail("")
                setMessage("")
            })
                .catch(err => console.log(err))
        }
    }

    return (
        <>
            <section id="head">
                <h1>Contáctenos</h1>
            </section>
            <section id="contacts">
                <div className="container">
                    <div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12 rigth">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.2941201980293!2d-79.47506162816741!3d9.009981826488202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca9276bae9e2f%3A0x56ec01ea0dda865!2sPrime%20Time%20Tower%2C%20Panam%C3%A1!5e0!3m2!1ses-419!2spa!4v1615305779783!5m2!1ses-419!2spa" width="500" height="500" style={{ border: 0, borderRadius: 10 }} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <div className="col-lg-6 col-12 left">
                            <div className="form">

                                <div className="form-group">
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Nombre y apellidos"
                                        name="name" />
                                </div>
                                <div className="form-group">
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="email" name="email" placeholder="Email" />
                                </div>

                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} type="text" className="form-control" id="message">Mensaje</textarea>
                                    </div>
                                </div>
                                <div className="col-12 recaptcha">
                                    <ReCaptcha recaptchaRef={recaptchaRef} setIAmHuman={setIAmHuman} />
                                </div>
                                <br />
                                <div className="col-12">
                                    <button type="button" onClick={handleSend} disabled={!IAmHuman} className="btn btn-information">Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}