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
                                <div className="col-12 ">
                                    <p className="fw-bolder fs-1 text-uppercase lh-sm first_Heading">{item.firstHeading}</p>
                                    <p className=" Firsttext mt-2">{item.firstText}</p>
                                </div>
                            </div>

                            {/* Cards */}
                            <div className="" style={{
                                maxWidth: "1000px", width: "100%", margin: "0px auto"

                            }}>
                                <div className="row g-3 m-0 pt-4">
                                    {[item.card1, item.card2, item.card3].map((card, cardIndex) => (
                                        <div
                                            key={cardIndex}
                                            className="col-sm-12 col-md-6 col-lg-4 "
                                        >
                                            <div className="card_Body d-flex flex-column rounded align-items-center">
                                                <div className="card_Content text-center">
                                                    <img src={card.Image} alt={`Card ${cardIndex + 1}`} className="img-fluid d-block mx-auto mb-2" />
                                                    <p className="fw-bold thriv_Heading">{card.cardHeading}</p>
                                                    <p className="text-muted thriv_Text">{card.cardText}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
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
