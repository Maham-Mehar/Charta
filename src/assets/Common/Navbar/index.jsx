import { Fragment, useState } from "react";
import Logo from "../../assets/Images/Logo.png";
import "../../globalStyles/globalStyle.css";
import "../Navbar/index.css";
import { RiArrowDropDownLine } from "react-icons/ri";



const Navbar = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true); // Show the dropdown when mouse enters
    };

    const handleMouseLeave = () => {
        setIsHovered(false); // Hide the dropdown when mouse leaves
    };

    return (
        <Fragment>
            <header className="py-3" style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.05)", backgroundColor: "#fff" }}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        {/* Logo */}
                        <a className="navbar-brand" href="#">
                            <img src={Logo} alt="Logo" style={{ height: "40px" }} />
                        </a>

                        {/* Toggler */}
                        <button
                            className="navbar-toggler border-0"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#mobileMenu"
                            aria-controls="mobileMenu"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="d-none d-lg-flex justify-content-between align-items-center w-100">
                            <ul className="navbar-nav mx-auto d-flex flex-row align-items-center list-unstyled mb-0">
                                <div
                                    className="position-relative"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="d-flex align-items-center gap-1">
                                        <div className="nav-item fw-bold fs-6 mx-4 animate-link animate-link bg-transparent fw-semibold me-0" style={{ fontSize: "14px" }}>
                                            Services
                                        </div>
                                        <RiArrowDropDownLine />
                                    </div>
                                    {isHovered && (
                                        <div className="dropdown-list position-absolute" style={{ top: '100%', left: '0', backgroundColor: '#fff', border: '1px solid #ccc', zIndex: 100 }}>
                                            <p className="list-item fw-bold fs-6 mx-4">Option 1</p>
                                            <p className="list-item fw-bold fs-6 mx-4">Option 2</p>
                                        </div>
                                    )}
                                </div>

                                <li className="nav-item fw-bold fs-6 mx-4 animate-link">
                                    <a href="" className="text-decoration-none text-dark">How It Works</a>
                                </li>
                                <li className="nav-item fw-bold fs-6 mx-4 animate-link">
                                    <a href="" className="text-decoration-none text-dark">Use Case</a>
                                </li>
                                <li className="nav-item fw-bold fs-6 mx-4 animate-link">
                                    <a href="" className="text-decoration-none text-dark">About</a>
                                </li>
                            </ul>

                            <button
                                className="fs-6 fw-bold border-0 rounded-pill text-white px-4 py-2"
                                style={{ backgroundColor: "#B88917" }}
                            >
                                Get Started
                            </button>
                        </div>

                    </nav>
                </div>

                {/* Mobile Offcanvas */}
                <div
                    className="offcanvas offcanvas-top"
                    tabIndex="-1"
                    id="mobileMenu"
                    aria-labelledby="mobileMenuLabel"
                    style={{height: "70vh",}}
                >
                    <div className="offcanvas-header border-bottom px-4">
                        <h5 className="offcanvas-title fw-bold text-dark" id="mobileMenuLabel">Menu</h5>
                        <button
                            type="button"
                            className="btn-close text-black"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="offcanvas-body d-flex flex-column py-3 bg-light rounded-3 px-4">
                        <ul className="list-unstyled  w-100">
                            <li className="fw-bold fs-5 my-3 text-dark">Services</li>
                            <li className="fw-bold fs-5 my-3">
                                <select className="form-select" style={{ maxWidth: "200px" }}>
                                    <option value=""></option>
                                    <option value="1"></option>
                                </select>
                            </li>
                            <li className="fw-bold fs-5 my-3 text-dark">How It Works</li>
                            <li className="fw-bold fs-5 my-3 text-dark">Use Case</li>
                            <li className="fw-bold fs-5 my-3 text-dark">About</li>
                        </ul>

                        <button
                            className="fs-5 fw-bold border-0 rounded-pill text-white px-2 py-2 mt-2"
                            style={{
                                backgroundColor: "#B88917",
                                width: "140px",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                transition: "background-color 0.3s ease, transform 0.3s ease",
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = "#9a7412"}
                            onMouseOut={(e) => e.target.style.backgroundColor = "#B88917"}
                        >
                            Get Started
                        </button>
                    </div>
                </div>

            </header>
        </Fragment>
    );
};

export default Navbar;
