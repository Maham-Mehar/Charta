import { Fragment } from "react";
import "../solutionCreation_Platform/index.css";
import "../../../globalStyles/globalStyle.css";
import Image from "../../../assets/Images/Image1.png";
const Solution_Creation = () => {
    return (
        <Fragment>
            <div className="body_Content">
                <div>
                    <p className="fs-5 fw-bold text-center first_Text" >AI-Human Solution Creation Platform</p>
                    <div className="Heading_Text lh-sm position-relative">
                        <img src={Image} alt="" className="position-absolute end-0 mt-1" />
                        <p className="position-relative">Build Your Network, Share Your Value</p>
                    </div>

                    <p className="fs-5 fw-medium second_Text lh-sm">Charta connects people with expertise to those who need it, creating a marketplace where everyone benefits from shared knowledge and fair rewards.</p>
                    <div className="d-flex justify-content-center mt-4">
                        <button className="fs-6 fw-bolder text-center text-white border-0 btn1"> Join The Network</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Solution_Creation