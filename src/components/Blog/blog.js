import React, { useEffect, useState } from 'react';
import axios from "axios";
import { ENDPOINT, LOCALTOKEN } from "../../config";

import './blog.css'

import category1 from '../../assets/img/cat1.png'
import category2 from '../../assets/img/cat2.png'
import category3 from '../../assets/img/cat3.png'

import new1 from '../../assets/img/not1.png'
import new2 from '../../assets/img/not2.png'
import new3 from '../../assets/img/not3.png'
import new4 from '../../assets/img/not4.png'

export default function Blog() {
    const [news, setNews] = useState([]);
    const [cats, setCats] = useState([]);
    const [recents, setRecents] = useState([]);

    const [category, setCategory] = useState('all');
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get(ENDPOINT + '/news')
            .then((res) => {
                const _news = res.data.news;
                setNews(_news);

                let tmp = []
                for (let i = 0; i < _news.length; i++) {
                    if (tmp.indexOf(_news[i].category) == -1) {
                        tmp.push(_news[i].category);
                    }
                }
                for (let i = 0; i < tmp.length; i++) {
                    let count = 0
                    for (let j = 0; j < _news.length; j++) {
                        if (tmp[i] == _news[j].category)
                            count++;
                    }
                    tmp[i] = [tmp[i], count];
                }
                setCats([...tmp])

                tmp = _news.sort((n1, n2) => {
                    if (n1.createdAt <= n2.createdAt) return -1;
                    else return 1;
                }).slice(0, 3);

                setRecents([...tmp]);

            })
            .catch((err) => console.log(err));
    }, []);

    const filter = () => {
        let _list = [...news];
        if(category != "all")
            _list = _list.filter(n => n.category == category)
        
        _list = _list.filter(n => n.text.indexOf(search) >= 0)
        
        return _list;
    }

    return (
        <>
            <section id="head">
                <h1>Novedades en Èlever</h1>
            </section>
            <section id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 rigth d-none d-lg-block">
                            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Buscar" />
                            <i className="fa fa-2x fa-search"></i>
                            <h5><b>CATEGORIAS</b></h5>
                            <div className="categories">
                                <p onClick={() => setCategory('all')} style={{cursor:'pointer'}}>Todas ({news.length})</p>
                                {cats.map(c => (
                                    <>
                                        <p onClick={() => setCategory(c[0])} style={{cursor:'pointer'}}>{c[0]} ({c[1]})</p>
                                        <hr />
                                    </>
                                ))}
                            </div>
                            <div className="news">
                                <h5><b>NOTICIAS RECIENTES</b></h5>
                                <div className="row">
                                    {
                                        recents.map(n => (
                                            <>
                                                <div className="col-3">
                                                    <img src={category1} />
                                                </div>
                                                <div className="col-9">
                                                    <p className="date">{n.createdAt.split('T')[0]}</p>
                                                    <p className="new">{n.text}</p>
                                                </div>
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 rnews">
                            <div className="row">
                                {filter().map(n => (
                                        <div className="col-md-6 col-12">
                                            <img src={new1} />
                                            <p className="date">{n.createdAt.split('T')[0]}</p>
                                            <h5 className="new">{n.text}</h5>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}