import React from 'react';
import Carousel from '../Carousel/carousel.js';

import './opinions.css'

export default function Opinions( { small } ) {
    if (small)
    return (
        <section id="opinions">
            <div className="container d-none d-md-block">
                <h1>¿Qué opinan nuestros usuarios?</h1>
                <div className="row texts">
                    <div className="col-4">
                        <h5 className="opinion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ducimus veritatis
					dolore quis doloremque sequi natus aperiam ut eligendi dignissimos.</h5>
                        <h4 className="puntations">Jaime <i className="fa fa-x fa-star"></i><i className="fa fa-x fa-star"></i><i
                            className="fa fa-x fa-star"></i><i className="fa fa-x fa-star"></i><i className="fa fa-x fa-star"></i></h4>
                    </div>
                    <div className="col-4">
                        <h5 className="opinion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ducimus veritatis
					dolore quis doloremque sequi natus aperiam ut eligendi dignissimos.</h5>
                        <h4 className="puntations">Miguel <i className="fa fa-x fa-star"></i><i className="fa fa-x fa-star"></i><i
                            className="fa fa-x fa-star"></i><i className="fa fa-x fa-star"></i><i className="fa fa-x fa-star"></i></h4>
                    </div>
                    <div className="col-4">
                        <h5 className="opinion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ducimus veritatis
					dolore quis doloremque sequi natus aperiam ut eligendi dignissimos.</h5>
                        <h4 className="puntations">Estefania <i className="fa fa-x fa-star"></i><i className="fa fa-x fa-star"></i><i
                            className="fa fa-x fa-star"></i><i className="fa fa-x fa-star"></i><i className="fa fa-x fa-star"></i></h4>
                    </div>
                </div>
            </div>
            <div className="container d-block d-md-none d-lg-none">
                <h1>¿Qué opinan nuestros usuarios?</h1>
                <Carousel />
            </div>
        </section>
    );
    else
    return <></>
}