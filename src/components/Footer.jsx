export default function Footer() {
    return (
        <footer className="bg-dark text-white text-center text-lg-start pt-4">
            <div className="container">
                <div className="row">
                    {/* Columna 1 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5>Sobre nosotros</h5>
                        <p>Este proyecto fue desarrollado como práctica de React.      
                        {/* © Farias Gonzalo, Lucas Capdevila, Bruno Singh. */}
                        </p>
                    </div>

                    {/* Columna 2 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5>Enlaces</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" className="text-white text-decoration-none">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-decoration-none">
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-decoration-none">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3 */}
                        <div className="col-lg-4 col-md-12 mb-4">
                        <h5>Seguinos</h5>
                        <a href="#" className="text-white me-3">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="text-white me-3">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="#" className="text-white me-3">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="text-white">
                            <i className="bi bi-github"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Línea inferior */}
            <div className="text-white-50 border-top border-secondary py-2">
                <div className="container text-center">
                    <small>
                        © Farias Gonzalo, Lucas Capdevila, Bruno Singh
                    </small>
                </div>
            </div>

        </footer>
    );
}