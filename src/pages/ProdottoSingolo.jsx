import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProdottoSingolo() {
    const { id } = useParams();
    console.log(id);
    const [oggetti, setOggetti] = useState([])

    function getData() {

        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                console.log(response.data);
                setOggetti(response.data)

            }).catch(error => {
                console.log(error);
            })

    }

    useEffect(getData, [])




    return (

        <>
            <div className="container">
                <div className='col d-flex mt-4'>
                    <div className="card h-100 bg-light shadow-lg p-3">
                        <img className="card-img-top w-50 mx-auto d-block" src={oggetti.image} alt="Title" />
                        <div className="card-body">
                            <h4 className="card-title">{oggetti.title}</h4>
                            <p className="card-text">{oggetti.description}</p>
                            <small>{oggetti.price}€</small>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
}