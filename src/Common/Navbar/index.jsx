import { Fragment } from "react";
import Logo from "../../assets/Images/Logo.png";
import "../../globalStyles/globalStyle.css";
const Navbar = () => {
    return (
        <Fragment>
            <div className="py-4" style={{ boxShadow: "10px 10px 10px #BAB9B926" }}>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <img src={Logo} alt="" />
                        </div>
                        <div>
                            <ul className="d-flex list-unstyled align-items-center mb-0">
                                <label className="fw-bold fs-6">Services</label>
                                <li className="fw-bold fs-6 pt-1"><select name="Services" id="" className="border-0">
                                    <option value=""></option></select></li>
                                <li className="fw-bold fs-6 mx-5 p-1">How It Work</li>
                                <li className="fw-bold fs-6 me-5 p-1">Use Case</li>
                                <li className="fw-bold fs-6 p-1">About</li>
                            </ul>
                        </div>
                        <div>
                            <button className="fs-6 fw_bold border-0 rounded-pill text-white px-4 py-2" style={{ backgroundColor: " #B88917", }}>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Navbar