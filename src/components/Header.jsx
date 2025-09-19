import React from 'react'

const Header = () => {
    return (

        <header>
            <div style={{}}>
                <h1 style={{ textAlign: "center", backgroundColor: '#1f1f27ff', color: 'white', padding: "20px", marginBottom:"0"}}>Pagina de práctica de React</h1>

                <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link active" aria-current="page" href="#">Opcion 1</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Opcion 2</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Opcion 3</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" aria-disabled="true">En desarrollo...</a>
                                </li>
                                <li>
                                    <img style={{width:"40px", height:"40px",}} src="https://media1.tenor.com/m/jUMex_rdqPwAAAAd/among-us-twerk.gif" alt="" />
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>


    )
}

export default Header
