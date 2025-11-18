export default function Footer() {


    return (
        <>
            <footer>

                <div className="container mt-5">
                    <div className="d-flex justify-content-between align-item-center">
                        <div>
                            Questo sito è protetto da copyright <i className="fa fa-copyright" aria-hidden="true"></i>
                        </div>

                        <div>
                            <nav className="nav">
                                <a className="nav-link" aria-current="page" href="#">Facebook</a>
                                <a className="nav-link" href="#">Instagram</a>
                                <a className="nav-link" href="#">Linkedin</a>

                            </nav>
                        </div>
                    </div>
                </div>

            </footer>
        </>

    );
}