import { Link, NavLink } from "react-router-dom";
export default function Header() {



    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="container">
                        <div className="d-flex gap-4 ">
                            <NavLink to="/">Homepage</NavLink>
                            <NavLink to="/ChiSiamo">Chi siamo</NavLink>
                            <NavLink to="/Prodotti">Prodotti</NavLink>
                        </div>

                        {/*  <a className="navbar-brand" href="/">Homepage</a>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/ChiSiamo" aria-current="page">Chi siamo
                                        <span className="visually-hidden">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Prodotti">Prodotti</a>
                                </li>
                            </ul>
                        </div> */}

                    </div>
                </nav>
            </header>
        </>

    );
}