import { Fragment, useState } from "react";
import { thrivData } from "../../../Data/thrivNetwork_Data";
import "../thriving_Network/style.css";
import Image1 from "../../../assets/Images/Frame1.png";

const Thriving_Network = () => {
    const [data] = useState(thrivData);

    return (
        <Fragment>
            <div className="Background_color">
                <div className="text-center pb-3 position-relative">
                    <img src={Image1} alt="" className="position-absolute start-0" />
                    <button className="fs-6 fw-bold mt-5 border-0 rounded text-white px-4 py-2 btn-primary">Why Charta?</button>
                </div>

                <div className="container">
                    {data.map((item, index) => (
                        <div key={index} className=" mx-auto text-center">
                            {/* Heading */}
                            <div className="row">
                                <div className="col-12 first_Heading">
                                    <p className="fw-bolder fs-1 text-uppercase lh-sm">{item.firstHeading}</p>
                                    <p>{item.firstText}</p>
                                </div>
                            </div>

                            {/* Cards */}
                            <div className="row justify-content-center mx-auto pt-4">
                                {[item.card1, item.card2, item.card3].map((card, cardIndex) => (
                                    <div key={cardIndex} className="col-md-3 col-sm-12 card_Body mx-3 d-flex flex-column rounded align-items-center">
                                        <div className="card_Content text-center">
                                            <img src={card.Image} alt={`Card ${cardIndex + 1}`} className="img-fluid d-block mx-auto mb-2" />
                                            <p className="fw-bold">{card.cardHeading}</p>
                                            <p className="text-muted fs-6">{card.cardText}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Learn More Button */}
                            <div className="py-5 mt-3">
                                <button className="fs-6 fw-bolder text-uppercase text-white border-0 btn1">Learn More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default Thriving_Network;
