import { Fragment, useState } from "react";
import { nReward } from "../../../Data/networkReward";
import "../../../globalStyles/globalStyle.css";
import Image4 from "../../../assets/Images/Image4.png";
const NetworkReward = () => {
    const [data, setData] = useState(nReward);

    return (
        <Fragment>
            <div className="container">
                <div className="row mt-5 ">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={item.id === 1 ? "col-12 text-center mb-5" : "col-md-4 mx-auto d-flex align-items-center"}
                        >
                            {item.id === 1 ? (
                                <>
                                    <button className="bg-dark text-white rounded fs-6 fw-bold px-4 py-2 mb-3">Network Benefits</button>
                                    <p className="fs-1 fw-bold text-uppercase mb-2 lh-sm">{item.firstHeading}</p>
                                    <p className="fs-6 fw-medium text-center mt-3 mx-auto" style={{ maxWidth: "670px" }}> {item.firstText} </p>

                                </>
                            ) : (
                                <div className="mx-auto mt-3 ">
                                    {item.icon && <item.icon size={30} className="text-primary p-1 rounded mb-2" style={{ border: "2px solid #2514481A" }} />}
                                    <p className="fs-5 fw-bold mb-2 ">{item.cardHeading}</p>
                                    <p className="fs-6 fw-medium mx-auto" style={{ maxWidth: "300px", }}>{item.cardText}</p>
                                </div>
                            )}

                        </div>
                    ))}
                    <div className="container position-relative" style={{ overflow: "hidden", paddingBottom: "100px" }}>
                        <div className="row mt-5">
                        </div>
                        <div className="text-center ">
                            <button
                                className="fs-6 fw-bolder text-uppercase text-white px-3 py-2 border-0 btn1 rounded-pill"
                                style={{
                                    background: "linear-gradient(to right, rgba(84, 120, 183, 1), rgba(37, 53, 81, 1))"
                                }}
                            >
                                Learn More
                            </button>
                        </div>

                        <img
                            src={Image4}
                            alt=""
                            className="position-absolute"
                            style={{
                                bottom: 0,
                                left: 0,
                                width: "140px",
                                zIndex: 0
                            }}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default NetworkReward;
