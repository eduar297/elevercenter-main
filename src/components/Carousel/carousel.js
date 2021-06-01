import React from "react";
import Carousel from 'react-material-ui-carousel'


const Item = ({ item }) => {
    return (
        <div>
            <h2 className="name-puntuacion">{item.name} &nbsp;
                <i className="fa fa-x fa-star"></i>
                <i className="fa fa-x fa-star"></i>
                <i className="fa fa-x fa-star"></i>
                <i className="fa fa-x fa-star"></i>
                <i className="fa fa-x fa-star"></i>
            </h2>
            <h5 className="text">{item.text}</h5>
        </div>
    )
}

const MyCarousel = () => {
    const items = [
        {
            name: "Jaime",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in ducimus ea sapiente sunt eum blanditiis eos perferendis culpa maiores quam accusamus sit quia, omnis ipsam aut fugiat iure nisi.",
        },
        {
            name: "Miguel",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in ducimus ea sapiente sunt eum blanditiis eos perferendis culpa maiores quam accusamus sit quia, omnis ipsam aut fugiat iure nisi.",
        },
        {
            name: "Estefania",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in ducimus ea sapiente sunt eum blanditiis eos perferendis culpa maiores quam accusamus sit quia, omnis ipsam aut fugiat iure nisi.",
        }
    ];

    return (
        <div className="container">
            <Carousel interval={4000} indicators={true}
                indicatorIconButtonProps={{
                    style: {
                        backgroundColor: 'white',
                        color: 'white',
                        padding: "10px",
                        margin: "10px",
                        border: '1px solid #279989'
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        backgroundColor: '#279989',
                        color: '#279989',
                    }
                }}
                indicatorContainerProps={{
                    style: {
                        marginTop: '50px',
                    }

                }}
            >
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>

    )

}

export default MyCarousel;