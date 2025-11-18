import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProdottoSingolo from './ProdottoSingolo';


export default function Prodotti() {

    const [prodotti, setProdotti] = useState([])



    useEffect(() => {
        const api_products = 'https://fakestoreapi.com/products'

        axios.get(api_products)
            .then(response => {
                console.log(response.data);
                setProdotti(response.data)
            }).catch(error => {
                console.error(error)
            });
    }, []
    )


    return (

        <>


            <main>
                <div className='container'>
                    <div className='row row-cols-1 row-cols-md-3'>

                        {
                            prodotti.map((prodotto) => (
                                <div className='col d-flex mt-4'>
                                    <div className="card h-100 bg-light shadow-lg p-3">
                                        <img className="card-img-top w-50 mx-auto d-block" src={prodotto.image} alt="Title" />
                                        <div className="card-body">
                                            <h4 className="card-title">{prodotto.title}</h4>
                                            <p className="card-text">{prodotto.description}</p>
                                            <small>{prodotto.price}€</small>
                                            <div>
                                                <Link className='btn btn-primary mt-2' to={`/Prodotti/${prodotto.id}`}>Visualizza</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </main>

        </>

    );
}