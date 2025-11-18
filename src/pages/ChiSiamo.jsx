import Header from "../assets/components/Header";
import Footer from '../assets/components/Footer';
export default function ChiSiamo() {



    return (

        <>


            <div className="p-5 mb-4 bg-secondary-subtle rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Ci presentiamo</h1>
                    <p className="col-md-8 fs-4">
                        Sono colui che ha deciso di studiare FullStack e poi ha realizzato che scrivere un “Chi siamo” decente richiede più tempo di quanto sembri. Per questo ho chiesto una mano all’AI: non perché non sapessi farlo, ma perché ero troppo concentrato a capire come funziona davvero la logica delle cose per perdere tempo a scrivere le parole giuste.
                        Qui niente “Lorem ipsum”: ha ufficialmente rotto le scatole. Grazie ChatGPT per queste piccole cose.
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                        Vedi i prodotti
                    </button>
                </div>
            </div>

        </>


    );
}