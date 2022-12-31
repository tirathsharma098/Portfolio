import "./Nav.css";
const Nav = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-light justify-content-center sticky-top">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mb-2 mb-lg-0 flex-grow-0.6">
                        <li className="nav-item">
                            <a
                                className="nav-link d-md-flex justify-content-md-center"
                                aria-current="page"
                                href="#homePointLink"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link d-md-flex justify-content-md-center"
                                href="#about"
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#skills"
                                className="nav-link justify-content-md-center d-md-flex"
                            >
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#contactForm"
                                className="nav-link justify-content-md-center d-md-flex"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
