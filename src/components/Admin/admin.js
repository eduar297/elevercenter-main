import React, { useState } from 'react';
import axios from "axios";
import { ENDPOINT, LOCALTOKEN } from "../../config";

import './admin.css'
import avatar from '../../assets/img/avatar1.PNG'
import img from '../../assets/img/cat3.png'

import Profesional from './professional.js';
import News from './news.js';

export default function Admin({ refresh, professionals, news }) {
    const [show, setShow] = useState("professionals")

    const [validated, setValidated] = useState('all');
    const [order, setOrder] = useState('name');
    const [search, setSearch] = useState('');

    const [nCategory, setNCategory] = useState('all');
    const [nOrder, setNOrder] = useState('createdAt');
    const [nSearch, setNSearch] = useState('');

    const [category, setCategory] = useState('category 1');
    const [text, setText] = useState('');

    const handleNewNews = () => {
        if (category == "" || text == "")
            setNewNews(true)
        else {
            axios.post(ENDPOINT + '/news/', { category: category, text: text }, {
                headers: { Authorization: `bearer ${localStorage[LOCALTOKEN]}` }
            })
                .then((res) => refresh())
                .catch((err) => console.log(err));
        }
    }

    const filter = () => {

        let _list = []
        if (show == "news") {
            _list = [...news]

            if (nCategory != 'all')
                _list = _list.filter(n => n.category == nCategory);

            _list = _list.sort((n1, n2) => {
                if (n1[nOrder].toLowerCase() <= n2[nOrder].toLowerCase()) return -1;
                else return 1;
            });

            _list = _list.filter(p => p[nOrder].toLowerCase().indexOf(nSearch.toLowerCase()) >= 0);

        }
        else {
            _list = [...professionals]

            if (validated == "validated")
                _list = _list.filter(p => p.validated == "true");
            if (validated == "notValidated")
                _list = _list.filter(p => p.validated == "");

            _list = _list.sort((p1, p2) => {
                if (p1[order].toLowerCase() <= p2[order].toLowerCase()) return -1;
                else return 1;
            });

            _list = _list.filter(p => p[order].toLowerCase().indexOf(search.toLowerCase()) >= 0);
        }


        return _list;
    }

    const [newNews, setNewNews] = useState(false);
    const _newNews = newNews ?
        <div className="form">
            <div className="form-group">
                <select onChange={(e) => setCategory(e.target.value)} className="control custom-select custom-select-sm form-control form-control-sm">
                    <option value="category 1">Category 1</option>
                    <option value="category 2">Category 2</option>
                    <option value="category 3">Category 3</option>
                    <option value="category 4">Category 4</option>
                </select>
            </div>
            <div className="form-group">
                <textarea type="text" className="form-control" onChange={(e) => setText(e.target.value)}>Texto</textarea>
            </div>
            <br />
            <button onClick={() => setNewNews(false)} type="button" className="btn btn-information">Cancelar</button>
        </div> : <></>

    const listToShow = show == "professionals" ?
        <section id="p-list">
            <div className="container">
                <h1>Profesionales</h1>
                <div className="row p-list">
                    {filter().map(item => (
                        <Profesional key={item._id} refresh={refresh} professional={item} validated={item.validated == "false" ? "block" : "none"} avatar={avatar} />
                    ))}
                </div>
            </div>
        </section>
        :
        <section id="n-list">
            <div className="container">
                <h1>Novedades</h1>
                <div className="new-news">
                    <button className="btn btn-new-news" onClick={handleNewNews}>Crear Noticia</button>
                    <div className="create-news">
                        {_newNews}
                    </div>
                </div>
                <div className="row n-list">
                    {filter().map(item => (
                        <News key={item._id} refresh={refresh} news={item} img={img} />
                    ))}
                </div>
            </div>
        </section>

    const filters = show == "professionals" ?
        <select onChange={(e) => setValidated(e.target.value)} className="control custom-select custom-select-sm form-control form-control-sm">
            <option value="all">Todos</option>
            <option value="validated">Validados</option>
            <option value="notValidated">No Validados</option>
        </select> :
        <select onChange={(e) => setNCategory(e.target.value)} className="control custom-select custom-select-sm form-control form-control-sm">
            <option value="all">Todas</option>
            <option value="category 1">Category 1</option>
            <option value="category 2">Category 2</option>
            <option value="category 3">Category 3</option>
            <option value="category 4">Category 4</option>
        </select>

    const orders = show == "professionals" ?
        <select onChange={(e) => setOrder(e.target.value)} className="control custom-select custom-select-sm form-control form-control-sm">
            <option value="name">Nombre</option>
            <option value="specialty">Especialidad</option>
            <option value="email">Email</option>
            <option value="city">Ciudad</option>
            <option value="province">Provincia</option>
        </select> :
        <select onChange={(e) => setNOrder(e.target.value)} className="control custom-select custom-select-sm form-control form-control-sm">
            <option value="createdAt">Fecha</option>
            <option value="category">Categoria</option>
            <option value="text">Texto</option>
        </select>

    const searchs = show == "professionals" ?
    <input onChange={(e) => setSearch(e.target.value)} type="text" className="control form-control form-control-sm" />:
    <input onChange={(e) => setNSearch(e.target.value)} type="text" className="control form-control form-control-sm" />

    return (
        <>
            <section id="admin-head">
                <h1>Dashboard</h1>
            </section>
            <section id="admin">
                <div className="container">
                    <div className="row">

                        <div className="col-3 col-md-1">
                            <label>
                                Mostrar:
                                </label>
                        </div>
                        <div className="col-3 col-md-2">
                            <select onChange={(e) => setShow(e.target.value)} className="control custom-select custom-select-sm form-control form-control-sm">
                                <option value="professionals">Profesionales</option>
                                <option value="news">Noticias</option>
                            </select>
                        </div>

                        <div className="col-3 col-md-1">
                            <label>Filtrar:</label>
                        </div>
                        <div className="col-3 col-md-2">
                            {filters}
                        </div>

                        <div className="col-3 col-md-1">
                            <label>
                                Ordenar:
                                </label>
                        </div>
                        <div className="col-3 col-md-2">
                            {orders}
                        </div>

                        <div className="col-3 col-md-1">
                            <label>
                                Buscar:
                                </label>
                        </div>
                        <div className="col-3 col-md-2">
                            {searchs}
                        </div>

                    </div>

                    {listToShow}

                </div>
            </section>
        </>
    );
}